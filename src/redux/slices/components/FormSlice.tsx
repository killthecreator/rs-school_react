import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = (
  'default' in toolkitRaw ? toolkitRaw.default : toolkitRaw
) as typeof toolkitRaw;
import type { PayloadAction } from '@reduxjs/toolkit';
import FormData from './../../../components/Form/FormData';

export const initialState: FormData = {
  title: '',
  image: undefined,
  persons: '',
  price: '',
  text: '',
  location: '',
  date: '',
  smoking: false,
  pets: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormData>) => action.payload,
    clearForm: () => initialState,
  },
});

export const { setFormData, clearForm } = formSlice.actions;
export default formSlice.reducer;
