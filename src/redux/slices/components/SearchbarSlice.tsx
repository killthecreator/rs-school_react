import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const searchbarSlice = createSlice({
  name: 'searchbar',
  initialState: {
    value: '',
  },
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = searchbarSlice.actions;
export default searchbarSlice.reducer;
