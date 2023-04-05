import React, { useEffect, useState } from 'react';
import useIsMounted from './../../hooks/useIsMounted';
import './Searchbar.scss';
import SearchbarProps from './SearchbarProps';

const Searcbar = ({ filterCards }: SearchbarProps) => {
  const [inputValue, setInputValue] = useState(localStorage.getItem('searchValue') || '');
  const isMounted = useIsMounted();

  useEffect(
    () => () => {
      if (!isMounted()) {
        localStorage.setItem('searchValue', inputValue);
      }
    },
    [isMounted, inputValue]
  );
  useEffect(() => filterCards(inputValue), [inputValue, filterCards]);

  const handleInput = (e: React.SyntheticEvent<HTMLInputElement>) =>
    setInputValue(e.currentTarget.value);

  return (
    <form className="search" data-testid="form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        className="search__input"
        data-testid="search"
        value={inputValue}
        onInput={handleInput}
      />
    </form>
  );
};

export default Searcbar;
