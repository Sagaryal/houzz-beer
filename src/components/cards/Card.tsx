import React, { useState } from "react";
import { TBeer } from "../../types";

const Card: React.FC<TBeer> = (beer): JSX.Element => {
  const { id, name, tagline, description, image_url, ingredients } = beer;
  const [hoveredBeerImage, setHoveredBeerImage] = useState<number | string | null>(null);
  const [hoveredBeerCard, setHoveredBeerCard] = useState<number | string | null>(null);

  const tooltipClasses = `absolute bottom-full mb-2 w-auto min-w-[8rem] max-w-xs p-2 bg-black text-white text-xs rounded-md shadow-md transition-opacity duration-300 ease-in-out ${
    hoveredBeerImage === id ? "opacity-100" : "opacity-0 invisible"
  }`;

  return (
    <div
      className={`w-full my-4 p-6 rounded-lg shadow-lg flex cursor-pointer relative ${
        hoveredBeerCard === id ? "bg-blue-100" : "bg-white"
      }`}
      onMouseEnter={() => setHoveredBeerCard(id)}
      onMouseLeave={() => setHoveredBeerCard(null)}
    >
      <div
        className="flex-shrink-0"
        onMouseEnter={() => {
          setHoveredBeerImage(id);
          // When there are no ingredients in MyBeer tab
          if (ingredients) setHoveredBeerCard(null);
        }}
        onMouseLeave={() => {
          setHoveredBeerCard(id);
          setHoveredBeerImage(null);
        }}
      >
        <img src={image_url || "src/assets/beer.png"} alt={name} className="w-24 h-48 object-contain" />
        {hoveredBeerImage === id && ingredients && (
          <div className={`${tooltipClasses} bottom-56`}>
            <p>Ingredients:</p>
            {Object.keys(ingredients).map((ingredient, index) => (
              <span key={index}>
                {ingredient}
                {index < Object.keys(ingredients).length - 1 ? ", " : ""}
              </span>
            ))}
            <svg
              className="absolute top-full left-1/2"
              style={{ transform: "translateX(-50%)" }}
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0L8 8L16 0H0Z" fill="black" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between ml-4 w-full">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{name}</h1>
          <p className="text-amber-500 mb-2">{tagline}</p>
          <p className="text-gray-800 text-sm mt-4 line-clamp-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
