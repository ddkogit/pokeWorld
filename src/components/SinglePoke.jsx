import React, { useEffect, useState, useRef } from "react";
import "./SinglePoke.css";

const SinglePoke = ({ name, url, index }) => {
  const [pokeImage, setPokeImage] = useState();
  const [pokeType, setPokeType] = useState([]);
  const contentRef = useRef(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokeType(data.types);
        setPokeImage(data.sprites.other.dream_world.front_default);
      })
      .catch((error) => console.log("error occurred"));
  }, [url]);

  useEffect(() => {
    const item = contentRef.current;

    const handleMouseMove = (e) => {
      let positionPx = e.clientX - item.getBoundingClientRect().left;
      let positionX = (positionPx / item.offsetWidth) * 100;

      let positionPy = e.clientY - item.getBoundingClientRect().top;
      let positionY = (positionPy / item.offsetHeight) * 100;

      item.style.setProperty('--rX', (0.5) * (50 - positionY) + 'deg');
      item.style.setProperty('--rY', -(0.5) * (50 - positionX) + 'deg');
    };

    const handleMouseOut = () => {
      item.style.setProperty('--rX', '0deg');
      item.style.setProperty('--rY', '0deg');
    };

    item.addEventListener('mousemove', handleMouseMove);
    item.addEventListener('mouseout', handleMouseOut);

    return () => {
      item.removeEventListener('mousemove', handleMouseMove);
      item.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="wrapp max-w-xs transition duration-300 ease-in-out hover:scale-105 cursor-pointer">
      <div
        ref={contentRef}
        className="content   rounded-xl  p-10 w-[250px] h-[350px] flex flex-col items-center justify-between"
      >
        <img
          src={pokeImage}
          className="w-[100px] h-[100px]"
          alt={`image of pokemon ${name}`}
        />
        <h2 className="text-slate-900 font-bold text-3xl uppercase">{name}</h2>
        <div className="lg:flex gap-5">
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
    </div>
  );
};

export default SinglePoke;
