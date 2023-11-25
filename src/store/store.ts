// store.ts
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/book-slice';
import {TypedUseSelectorHook ,useSelector} from 'react-redux';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;


export const useSelectorCustom:TypedUseSelectorHook<RootState> = useSelector;