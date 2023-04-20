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
