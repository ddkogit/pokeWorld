import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";
import SinglePoke from "./SinglePoke";

const PokeList = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const [pokeList, setPokeList] = useState();
  const [pokeDetail, setPokeDetail] = useState([]);

  const [testurl, setTesturl] = useState();


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPokeList(data.results));
  }, [url]);




  return (
    <div >
        <div className="flex  items-center">
      <input  type="text" className="bg-blue-500 text-white p-5 w-3/4 mx-auto rounded-2xl"  />
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
