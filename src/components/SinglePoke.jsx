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
      });
  }, []);


  return (
    <div className="">
      <div className="bg-red-100 p-10 rounded-xl w-[250px] h-[300px]   flex flex-col items-center justify-between">
        <img
          src={pokeImage}
          className="w-[100px] h-[100px]"
          alt={`image of pokemon ${name}`}
        />
        <h2 className="text-red-800 text-3xl uppercase"> {name}</h2>
        <div className="lg:flex gap-5 font-bold">
          {pokeType?.map((type, index) => (
            <div key={index} className="text-white bg-blue-500 rounded-xl px-5 py-1 my-3 ">
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
