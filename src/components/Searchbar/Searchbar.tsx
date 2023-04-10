import React, { useEffect, useState } from 'react';
import './Searchbar.scss';
import SearchbarProps from './SearchbarProps';

const Searcbar = ({ filterCards }: SearchbarProps) => {
  const [inputValue, setInputValue] = useState(localStorage.getItem('searchValue') || '');

  useEffect(() => {
    const initValue = localStorage.getItem('searchValue') || '';
    if (initValue) filterCards(initValue);
  }, [filterCards]);

  useEffect(() => () => localStorage.setItem('searchValue', inputValue), [inputValue]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
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
      <form className="search" data-testid="form" onSubmit={(e) => e.preventDefault()}>
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
