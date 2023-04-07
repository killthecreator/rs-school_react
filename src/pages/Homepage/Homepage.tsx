import React from 'react';

import Searchbar from '../../components/Searchbar/Searchbar';
import Cards from '../../components/Cards/Cards';
import flickrAPICall from './../../utils/FlickrAPICall';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './../../redux/store';
import {
  setActiveCards,
  togglePending,
  setError,
  clearCards,
} from '../../redux/slices/pages/HomepageSlice';

const Homepage = () => {
  const dispatch = useDispatch();
  const { isPending, error, activeCards } = useSelector((state: RootState) => state.homepage);

  const filterCards = async (value: string) => {
    dispatch(clearCards());
    try {
      const photosArr = await flickrAPICall(value);
      dispatch(setActiveCards(photosArr));
    } catch (err) {
      if (typeof err === 'string') dispatch(setError(err));
      if (err instanceof Error) dispatch(setError(err.message));
    } finally {
      dispatch(togglePending(false));
    }
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
