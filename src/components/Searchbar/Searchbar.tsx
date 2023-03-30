import React, { useEffect, useState, useRef } from 'react';
import './Searchbar.scss';
import SearchbarProps from './SearchbarProps';

const Searcbar = ({ filterCards }: SearchbarProps) => {
  const inputSearch = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState(localStorage.getItem('searchValue') || '');

  useEffect(() => () => localStorage.setItem('searchValue', inputValue));
  useEffect(() => filterCards(inputValue), [inputValue, filterCards]);

  const handleInput = () => {
    if (inputSearch.current) {
      setInputValue(inputSearch.current.value);
    }
  };

  return (
    <form action="#" className="search" data-testid="form">
      <input
        type="search"
        className="search__input"
        data-testid="search"
        ref={inputSearch}
        value={inputValue}
        onInput={handleInput}
        onKeyDown={handleInput}
      />
    </form>
  );
};

export default Searcbar;
