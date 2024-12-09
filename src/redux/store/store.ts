import { configureStore } from '@reduxjs/toolkit';
import newProductSlice from '../feature/newProductSlice';
import categoriesSlice from '../feature/categoriesSlice';
import loaderSlice from '../feature/loaderSlice';
const store = configureStore({
    reducer: {
        // Add your reducers here
        newProduct:newProductSlice,
        categories:categoriesSlice,
        loader:loaderSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
