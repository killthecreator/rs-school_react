import React from 'react';
import Card from '../Card/Card';
import CardsProps from './CardsProps';
import './Cards.scss';

const Cards = ({ cards }: CardsProps) => {
  return (
    <ul className="cards" data-testid="cards">
      {cards.map((cardData, index) => (
        <Card key={index} {...cardData} />
      ))}
    </ul>
  );
};

export default Cards;
