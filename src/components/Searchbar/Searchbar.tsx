import React from 'react';
import SearchbarProps from './SearchbarProps';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './../../redux/store';
import { setValue } from '../../redux/slices/components/SearchbarSlice';
import './Searchbar.scss';

const Searcbar = ({ filterCards }: SearchbarProps) => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state: RootState) => state.searchbar.value);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        if (inputValue) {
          filterCards(inputValue);
        }
        break;
    }
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
          onInput={(e) => dispatch(setValue({ ...e.currentTarget }))}
          required
        />
      </form>
    </>
  );
};

export default Searcbar;
