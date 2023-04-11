import React, { useEffect, useState } from 'react';
import './Searchbar.scss';
import SearchbarProps from './SearchbarProps';

const Searcbar = ({ filterCards }: SearchbarProps) => {
  const [inputValue, setInputValue] = useState(localStorage.getItem('searchValue') || '');

  useEffect(() => {
    const initValue = localStorage.getItem('searchValue') || '';
    filterCards(initValue);
  }, [filterCards]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        filterCards(inputValue);
        break;
    }
  };

  const handleInput = async (e: React.SyntheticEvent<HTMLInputElement>) => {
    localStorage.setItem('searchValue', e.currentTarget.value);
    setInputValue(e.currentTarget.value);
  };

  return (
    <>
      <form className="search" data-testid="form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          className="search__input"
          data-testid="search"
          value={inputValue}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
        />
      </form>
    </>
  );
};

export default Searcbar;
