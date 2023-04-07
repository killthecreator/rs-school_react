import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import CardProps from '../../../components/Card/CardProps';

interface InitialState {
  activeCards: CardProps[];
  isPending: boolean;
  error: null | string;
}

const initialState: InitialState = {
  activeCards: [],
  isPending: false,
  error: null,
};

export const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    setActiveCards: (state, action: PayloadAction<CardProps[]>) => {
      state.activeCards = action.payload;
    },
    togglePending: (state, action) => {
      state.isPending = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearCards: () => {
      return { activeCards: [], isPending: true, error: null };
    },
  },
});

export const { setActiveCards, togglePending, setError, clearCards } = homepageSlice.actions;
export default homepageSlice.reducer;
