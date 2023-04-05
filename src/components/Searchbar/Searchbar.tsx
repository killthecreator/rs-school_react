import React, { useEffect, useState } from 'react';
import './Searchbar.scss';
import SearchbarProps from './SearchbarProps';

const Searcbar = ({ filterCards }: SearchbarProps) => {
  const [inputValue, setInputValue] = useState(localStorage.getItem('searchValue') || '');

  useEffect(() => () => localStorage.setItem('searchValue', inputValue));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        if (inputValue) {
          filterCards(inputValue);
        }
        break;
    }
  };

  const handleInput = (e: React.SyntheticEvent<HTMLInputElement>) =>
    setInputValue(e.currentTarget.value);

  return (
    <>
      <form action="#" className="search" data-testid="form">
        <input
          type="search"
          className="search__input"
          data-testid="search"
          value={inputValue}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          required
        />
      </form>
    </>
  );
};

export default Searcbar;
