import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Cards.scss';
import CardsProps from './CardsProps';

const Cards = (props: CardsProps) => {
  const [cards, setCards] = useState(props.cards);

  useEffect(() => setCards(props.cards), [props.cards]);

  return (
    <ul className="cards" data-testid="cards">
      {cards.map((cardData, index) => (
        <Card key={index} {...cardData} />
      ))}
    </ul>
  );
};

export default Cards;
