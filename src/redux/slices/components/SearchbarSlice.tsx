import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  value: string;
}

const initialState = {
  value: '',
};

export const searchbarSlice = createSlice({
  name: 'searchbar',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<InitialState>) => action.payload,
  },
});

export const { setValue } = searchbarSlice.actions;
export default searchbarSlice.reducer;
