import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";


const SinglePoke = ({ name, url }) => {
  const [pokeImage, setPokeImage] = useState();

  const [pokeType, setPokeType] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokeType(data.types);
        setPokeImage(data.sprites.other.dream_world.front_default);
      })
      .catch((error) => console.log("error occured"));
  }, []);

  return (
    <div className="max-w-xs transition duration-300 ease-in-out hover:scale-105">
      <div
        className="bg-gray-200  p-10 rounded-xl w-[250px] h-[350px]
         flex flex-col items-center justify-between hover:bg-gray-400 hover:cursor-pointer shadow-md"
      >
        
        <img
          src={pokeImage}
          className="w-[100px] h-[100px]"
          alt={`image of pokemon ${name}`}
        />
        <h2 className="text-slate-900 font-bold text-3xl uppercase"> {name}</h2>
        <div className="lg:flex gap-5 ">
          {pokeType?.map((type, index) => (
            <div
              key={index}
              className="text-white bg-slate-700 rounded-xl px-5 py-1 my-3"
            >
              {type.type.name}
            </div>
          ))}
        </div>
      </div>

      <h3></h3>
    </div>
  );
};

export default SinglePoke;
