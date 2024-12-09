import { configureStore } from '@reduxjs/toolkit';
import newProductSlice from '../feature/newProductSlice';
const store = configureStore({
    reducer: {
        // Add your reducers here
        newProduct:newProductSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
