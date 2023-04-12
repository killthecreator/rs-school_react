import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  inputedValue: string;
  submitedValue: string;
}

export const initialState: InitialState = {
  inputedValue: '',
  submitedValue: '',
};

export const searchbarSlice = createSlice({
  name: 'searchbar',
  initialState,
  reducers: {
    setSubmitedhValue: (state, action: PayloadAction<string>) => {
      state.submitedValue = action.payload;
    },
    setInputedValue: (state, action: PayloadAction<string>) => {
      state.inputedValue = action.payload;
    },
  },
});

export const { setSubmitedhValue, setInputedValue } = searchbarSlice.actions;
export default searchbarSlice.reducer;
