import React, { useCallback, useEffect } from 'react';

import Searchbar from '../../components/Searchbar/Searchbar';
import Cards from '../../components/Cards/Cards';
import CardProps from 'components/Card/CardProps';
import flickrAPICall from './../../utils/FlickrAPICall';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './../../redux/store';
import { setActiveCards } from './../../redux/slices/pages/HomepageSlice';
import { useGetFlickrByValueQuery } from './../../redux/slices/API/flickrAPISlice';

const Homepage = () => {
  const inputValue = useSelector((state: RootState) => state.searchbar.value);

  const { data, isFetching, isError, error } = useGetFlickrByValueQuery(inputValue);

  const dispatch = useDispatch();
  const { activeCards } = useSelector((state: RootState) => state.homepage);

  const filterCards = useCallback(async () => {
    const photosArr: CardProps[] = await flickrAPICall(data);
    dispatch(setActiveCards(photosArr));
  }, [dispatch, data]);

  useEffect(() => {
    if (data && data.stat !== 'fail') filterCards();
  }, [filterCards, data]);

  return (
    <main>
      <Searchbar />
      {isError && <p data-testid="error">{error.data}</p>}
      {isFetching ? <p data-testid="pending">Loading...</p> : <Cards cards={activeCards} />}
    </main>
  );
};

export default Homepage;
