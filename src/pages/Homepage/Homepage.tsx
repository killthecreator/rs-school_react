import React, { useState } from 'react';

import Searchbar from '../../components/Searchbar/Searchbar';
import Cards from '../../components/Cards/Cards';
import CardProps from 'components/Card/CardProps';

import flickrAPICall from './../../utils/FlickrAPICall';

const Homepage = () => {
  const [activeCards, setActiveCards] = useState<CardProps[]>([]);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const filterCards = (value: string) => {
    clearCards();
    flickrAPICall(setActiveCards, setIsPending, setError, value);
  };

  const clearCards = () => {
    setActiveCards([]);
    setIsPending(true);
    setError(null);
  };

  return (
    <main>
      <Searchbar filterCards={filterCards} />
      {error && <p>{error}</p>}
      {isPending && <p data-testid="pending">Loading...</p>}
      <Cards cards={activeCards} />
    </main>
  );
};

export default Homepage;
