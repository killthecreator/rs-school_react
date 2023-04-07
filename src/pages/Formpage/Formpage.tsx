import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import Cards from '../../components/Cards/Cards';
import CardProps from 'components/Card/CardProps';

const Formpage = () => {
  const [activeCards, setActiveCards] = useState([] as CardProps[]);

  const addCard = (card: CardProps) => {
    setActiveCards(activeCards.concat(card));
  };

  return (
    <main>
      <Form addCard={addCard} />
      <Cards cards={activeCards} />
    </main>
  );
};

export default Formpage;
