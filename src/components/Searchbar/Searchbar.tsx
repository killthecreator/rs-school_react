import React, { useEffect, useState } from 'react';

import searchIcon from './../../assets/search-icon.svg';

export default (props: SearchbarProps) => {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('searchValue') ? localStorage.getItem('searchValue') : ''
  );

  useEffect(() => {
    localStorage.setItem('searchValue', inputValue as string);
    props.filterCards(inputValue as string);
  });

  const saveInputValue = async (e: React.SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    setInputValue(input.value);
  };

  const handleInput = async (e: React.SyntheticEvent) => {
    await saveInputValue(e);
    props.filterCards(inputValue as string);
  };

  return (
    <form action="#" className="search" data-testid="form">
      <button className="search__btn" type="submit">
        <img src={searchIcon} alt="search-icon" className="search__icon" />
      </button>
      <input
        type="search"
        className="search__input"
        data-testid="search"
        value={inputValue as string}
        onInput={handleInput}
        onKeyDown={handleInput}
      />
    </form>
  );
};
