import React, { useState } from 'react';

import Searchbar from '../../components/Searchbar/Searchbar';
import Cards from '../../components/Cards/Cards';
import CardProps from 'components/Card/CardProps';

import flickrAPICall from './../../utils/FlickrAPICall';

const Homepage = () => {
  const [activeCards, setActiveCards] = useState<CardProps[]>([]);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const filterCards = async (value: string) => {
    clearCards();
    try {
      const photosArr = await flickrAPICall(value);
      setActiveCards(photosArr);
    } catch (err) {
      if (typeof err === 'string') {
        setError(err);
      } else if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setIsPending(false);
    }
  };

  const clearCards = () => {
    setActiveCards([]);
    setIsPending(true);
    setError(null);
  };

  return (
    <main>
      <Searchbar filterCards={filterCards} />
      {error && <p data-testid="error">{error}</p>}
      {isPending && <p data-testid="pending">Loading...</p>}
      <Cards cards={activeCards} />
    </main>
  );
};

export default Homepage;
