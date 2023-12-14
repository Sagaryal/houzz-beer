import React, { useState } from "react";
import { IBeer } from "../../interface";

const Card: React.FC<IBeer> = (beer) => {
  const { name, tagline, description, image_url } = beer;
  const [hoveredBeer, setHoveredBeer] = useState<number | null>(null);

  return (
    <li className="w-full my-4 bg-white p-6 rounded-md shadow-md flex cursor-pointer">
      <div className="flex-shrink-0">
        <img
          src={image_url || "src/assets/beer.png"}
          alt={name}
          className="w-24 h-48 object-contain"
          onMouseEnter={() => setHoveredBeer(beer.id)}
          onMouseLeave={() => setHoveredBeer(null)}
        />
      </div>
      <div className="flex flex-col justify-between md:ml-4">
        <div>
          <h2 className="text-xl font-bold mt-0">{name}</h2>
          <p className="text-amber-500 mb-2">{tagline}</p>
        </div>
        <p className="text-gray-800">{description}</p>
      </div>
      {hoveredBeer === beer.id && beer.ingredients && (
        <div className="mt-2">
          Ingredients:
          {Object.keys(beer.ingredients).map((ingredient, index) => (
            <p key={index}>{ingredient}</p>
          ))}
        </div>
      )}
    </li>
  );
};

export default Card;
