import React, { useEffect, useRef } from 'react';
import { RootState } from './../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setSubmitedhValue, setInputedValue } from './../../redux/slices/components/SearchbarSlice';

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
    <form data-testid="form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        className="w-52 h-8 p-2.5 border border-solid border-gray-400 rounded-lg outline-none"
        data-testid="search"
        onKeyDown={handleKeyDown}
        onInput={(e) => dispatch(setInputedValue(e.currentTarget.value))}
        ref={inputSearch}
      />
    </form>
  );
};

export default Searcbar;
