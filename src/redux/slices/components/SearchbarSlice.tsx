import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  value: string;
}

export const initialState = {
  value: '',
};

export const searchbarSlice = createSlice({
  name: 'searchbar',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<InitialState>) => action.payload,
  },
});

export const { setSearchValue } = searchbarSlice.actions;
export default searchbarSlice.reducer;
