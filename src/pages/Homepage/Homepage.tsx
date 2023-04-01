import React, { useState } from 'react';

import Searchbar from '../../components/Searchbar/Searchbar';
import Cards from '../../components/Cards/Cards';
import FlickrData from 'utils/FlickrData';
import CardProps from 'components/Card/CardProps';

const API_KEY = import.meta.env.VITE_API_KEY;

const Homepage = () => {
  const [activeCards, setActiveCards] = useState<CardProps[]>([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const filterCards = (value: string) => {
    clearCards();
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${value}&tagmode=all&per_page=6&page=1&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => {
        const photosArr = data.photos.photo.map((pic: FlickrData) => {
          const image = +pic.server
            ? `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`
            : null;
          return {
            image: image,
            title: pic.title,
            price: 'No price',
            text: '',
            likes: 0,
            bookmarks: 0,
            hidden: true,
          };
        });

        setActiveCards(photosArr);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
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
