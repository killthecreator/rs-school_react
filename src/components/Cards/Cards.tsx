import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

export default (props: CardsProps) => {
  const [cards, setCards] = useState(props.cards);

  useEffect(() => setCards(props.cards));

  return (
    <ul className="cards" data-testid="cards">
      {cards.map((cardData, index) => (
        <Card key={index} {...cardData} />
      ))}
    </ul>
  );
};
