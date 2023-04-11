import React, { useEffect, useRef } from 'react';
import { RootState } from './../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from './../../redux/slices/components/SearchbarSlice';
import './Searchbar.scss';

const Searcbar = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state: RootState) => state.searchbar.value);
  const inputSearch = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputValue && inputSearch.current) {
      inputSearch.current.value = inputValue;
    }
  }, [inputSearch, inputValue]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        if (e.currentTarget.value) {
          dispatch(setSearchValue({ ...e.currentTarget }));
        }
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
        ref={inputSearch}
        required
      />
    </form>
  );
};

export default Searcbar;
