import React from "react";
import Card from "./Card";
import { IBeer } from "../../interface";

interface CardLayoutProps {
  cards: IBeer[];
}

const CardLayout: React.FC<CardLayoutProps> = ({ cards }) => {
  return (
    <ul className={`flex items-start flex-col`}>
      {cards.map((beer, index) => (
        <Card key={index} {...beer} />
      ))}
    </ul>
  );
};

export default CardLayout;
