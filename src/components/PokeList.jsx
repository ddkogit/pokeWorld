import React, { useCallback, useEffect, useMemo, useState } from "react";
import useFetch from "../useFetch";
import SinglePoke from "./SinglePoke";

const PokeList = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const [pokeList, setPokeList] = useState([]);

  const [searchPoke, setSearchPoke] = useState("");
  const [searchedList, setSearchedList] = useState([]);


  //here handlesearch only recreated when searchPoke changes 
  const handleSearch = useCallback((e) => {
    setSearchPoke(e.target.value);
  }, [searchPoke]);

  useEffect(() => {


    const cachedData = localStorage.getItem("pokeListData");
    const cacheTime = localStorage.getItem("cacheTime");
  
  
    if(cachedData && cacheTime){
      const expiring = 60 * 60 *1000;
      const currentTime = Date.now();
  
      if(currentTime - parseInt(cacheTime) < expiring){
          setPokeList(JSON.parse(cachedData));
          setSearchedList(JSON.parse(cachedData));
  
          return;
  
      }
      else{
          localStorage.removeItem("pokeListData");
          localStorage.removeItem("cacheTime");
      }
  
    }


    fetch(url)
      .then((res) => res.json())
      .then((data) => {setPokeList(data.results)

        localStorage.setItem("pokeListData",JSON.stringify(data.results));
        localStorage.setItem("cacheTime",Date.now());

      })
      .catch((error)=>console.log("error occured"));
  }, [url]);



  //memorize filretedList so it dont run in every render.
  const filteredList = useMemo(() => {
    return pokeList.filter((poke) =>
      poke.name.toLowerCase().includes(searchPoke.toLowerCase())
    );
  }, [searchPoke, pokeList]);

  useEffect(() => {
    setSearchedList(filteredList);
  }, [filteredList]);

  return (
    <div>
      <div className="flex  items-center">
        <input
          onChange={handleSearch}
          value={searchPoke}
          type="text"
          className="bg-blue-500 text-white p-3 w-3/4 mx-auto rounded-2xl text-xl
      placeholder-gray-200
      "
          placeholder="Search A Pokemon"
        />
      </div>
      <div className="m-10 flex gap-10 flex-wrap items-center justify-center">
        {searchedList.length === 0 ? (
          <div className="text-4xl font-bold text-red-600 text-center">Sorry. That Pokemon does not exists</div>
        ) : (
          searchedList.map((poke) => (
            <div key={poke.name} className="">
              <SinglePoke name={poke.name} url={poke.url} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PokeList;
