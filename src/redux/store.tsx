import { configureStore } from '@reduxjs/toolkit';
import searchbarSliceReducer from './slices/components/SearchbarSlice';
import homepageSliceReducer from './slices/pages/HomepageSlice';
import formpageSliceReducer from './slices/pages/FormpageSlice';
import formSliceReducer from './slices/components/FormSlice';

const store = configureStore({
  reducer: {
    searchbar: searchbarSliceReducer,
    homepage: homepageSliceReducer,
    form: formSliceReducer,
    formpage: formpageSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
