import React from "react";
import Card from "./Card";
import { TBeer } from "../../types";

interface CardLayoutProps {
  cards: TBeer[];
}

const CardLayout: React.FC<CardLayoutProps> = ({ cards }): JSX.Element => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {cards.map((beer) => (
        <Card key={beer.id} {...beer} />
      ))}
    </div>
  );
};

export default CardLayout;
