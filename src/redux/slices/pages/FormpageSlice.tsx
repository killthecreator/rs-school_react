import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import CardProps from '../../../components/Card/CardProps';

interface InitialState {
  activeCards: CardProps[];
}

const initialState: InitialState = {
  activeCards: [],
};

export const formpageSlice = createSlice({
  name: 'formpage',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CardProps>) => {
      state.activeCards = [...state.activeCards, action.payload];
    },
  },
});

export const { addCard } = formpageSlice.actions;
export default formpageSlice.reducer;
