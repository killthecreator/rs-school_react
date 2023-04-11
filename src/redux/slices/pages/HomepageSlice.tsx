import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import CardProps from '../../../components/Card/CardProps';

interface InitialState {
  activeCards: CardProps[];
}

const initialState: InitialState = {
  activeCards: [],
};

export const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    setActiveCards: (state, action: PayloadAction<CardProps[]>) => {
      state.activeCards = action.payload;
    },
  },
});

export const { setActiveCards } = homepageSlice.actions;
export default homepageSlice.reducer;
