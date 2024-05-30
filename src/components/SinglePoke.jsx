import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";

const SinglePoke = ({ name, url }) => {
  const [pokeImage, setPokeImage] = useState();

  const [pokeType,setPokeType] = useState([]);
       

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>{
        setPokeType(data.types);
        setPokeImage(data.sprites.other.dream_world.front_default)
      }) ;
      
    }, []);

    console.log(pokeImage)



  return (
    <div className="">
        <div className="bg-red-100 p-10 rounded-xl w-[300px] h-[300px] flex flex-col items-center justify-between">

        <img src={pokeImage} width={100} alt="" />
      <h2 className="text-red-800 text-3xl uppercase"> {name}</h2>
      <div>
       {
           pokeType?.map((type,index)=>(
               <div key={index}>

            <button>{type.type.name}.......            
            </button>
            </div>
        ))
    }
    </div>
      </div>

      <h3></h3>
    </div>
  );
};

export default SinglePoke;
