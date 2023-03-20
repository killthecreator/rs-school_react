import React, { useState } from 'react';

import Searchbar from '../../components/Searchbar/Searchbar';
import Cards from '../../components/Cards/Cards';
import cardsData from '../../data/cardsData';

export default () => {
  const [activeCards, setActiveCards] = useState(cardsData);

  const filterCards = (value: string) => {
    setActiveCards(
      cardsData.filter((card) => {
        return (
          card.title.toLocaleLowerCase().includes(value.toLowerCase()) ||
          card.price.toString().includes(value) ||
          card.text.toLocaleLowerCase().includes(value.toLowerCase())
        );
      })
    );
  };

  return (
    <main>
      <Searchbar filterCards={filterCards.bind(this)} />
      <Cards cards={activeCards} />
    </main>
  );
};
