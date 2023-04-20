import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = (
  'default' in toolkitRaw ? toolkitRaw.default : toolkitRaw
) as typeof toolkitRaw;
import type { PayloadAction } from '@reduxjs/toolkit';
import CardProps from '../../../components/Card/CardProps';

interface InitialState {
  activeCards: CardProps[];
}

export const initialState: InitialState = {
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
