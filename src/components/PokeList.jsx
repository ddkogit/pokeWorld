import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";
import SinglePoke from "./SinglePoke";

const PokeList = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const [pokeList, setPokeList] = useState();
 
  const [searchPoke,setSearchPoke] = useState("");

  const handleSearch=()=>{

  }

  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPokeList(data.results));
  }, [url]);






  return (
    <div >
        <div className="flex  items-center">
      <input  
      onChange={handleSearch} value={searchPoke}
      type="text" className="bg-blue-500 text-white p-3 w-3/4 mx-auto rounded-2xl text-xl
      placeholder-gray-200
      "  placeholder="Search A Pokemon"/>
        </div>
      <div className="m-10 flex gap-10 flex-wrap items-center justify-center">
       {
        pokeList?.map((poke)=>(
          <div key={poke.name} className="">
            <SinglePoke name={poke.name}  url={poke.url} />
          </div>
        ))
       }

      </div>
    </div>
  );
};

export default PokeList;
