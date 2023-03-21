import React, { useEffect, useState } from 'react';

export default (props: SearchbarProps) => {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('searchValue') ? localStorage.getItem('searchValue') : ''
  );

  useEffect(() => {
    localStorage.setItem('searchValue', inputValue as string);
    props.filterCards(inputValue as string);
  }, [inputValue]);

  const saveInputValue = async (e: React.SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    setInputValue(input.value);
  };

  const handleInput = async (e: React.SyntheticEvent) => {
    await saveInputValue(e);
  };

  return (
    <form action="#" className="search" data-testid="form">
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
