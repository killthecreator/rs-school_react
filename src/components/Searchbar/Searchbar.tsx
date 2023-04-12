import React, { useEffect, useRef } from 'react';
import { RootState } from './../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setSubmitedhValue, setInputedValue } from './../../redux/slices/components/SearchbarSlice';
import './Searchbar.scss';

const Searcbar = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state: RootState) => state.searchbar.inputedValue);
  const inputSearch = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputValue && inputSearch.current) {
      inputSearch.current.value = inputValue;
    }
  }, [inputSearch, inputValue]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        dispatch(setSubmitedhValue(e.currentTarget.value));
        break;
    }
  };

  return (
    <form className="search" data-testid="form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        className="search__input"
        data-testid="search"
        onKeyDown={handleKeyDown}
        onInput={(e) => dispatch(setInputedValue(e.currentTarget.value))}
        ref={inputSearch}
      />
    </form>
  );
};

export default Searcbar;
