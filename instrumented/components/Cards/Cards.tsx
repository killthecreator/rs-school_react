import React from 'react';
import Card from '../Card/Card';
import CardsProps from './CardsProps';

const Cards = ({ cards }: CardsProps) => {
  return (
    <ul className="grid grid-cols-cards justify-center gap-8 w-full " data-testid="cards">
      {cards.map((cardData, index) => (
        <Card key={index} {...cardData} />
      ))}
    </ul>
  );
};

export default Cards;
