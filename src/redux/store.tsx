import { configureStore } from '@reduxjs/toolkit';
import searchbarSliceReducer from './slices/components/SearchbarSlice';
import homepageSliceReducer from './slices/pages/HomepageSlice';
import formpageSliceReducer from './slices/pages/FormpageSlice';

const store = configureStore({
  reducer: {
    searchbar: searchbarSliceReducer,
    homepage: homepageSliceReducer,
    formpage: formpageSliceReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
