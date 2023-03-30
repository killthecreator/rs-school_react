import React, { useState, useCallback } from 'react';

import Searchbar from '../../components/Searchbar/Searchbar';
import Cards from '../../components/Cards/Cards';
import cardsData from '../../data/cardsData';

const Homepage = () => {
  const [activeCards, setActiveCards] = useState(cardsData);

  const filterCards = useCallback((value: string) => {
    setActiveCards(
      cardsData.filter((card) => {
        return (
          card.title.toLocaleLowerCase().includes(value.toLowerCase()) ||
          card.price.toString().includes(value) ||
          card.text.toLocaleLowerCase().includes(value.toLowerCase())
        );
      })
    );
  }, []);

  return (
    <main>
      <Searchbar filterCards={filterCards} />
      <Cards cards={activeCards} />
    </main>
  );
};

export default Homepage;
