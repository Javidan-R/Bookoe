// store.ts
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/book-slice';

import {TypedUseSelectorHook ,useSelector} from 'react-redux';
import { booksApi } from './books/books-api';

const store = configureStore({
  reducer: {
    books: booksReducer,
    [booksApi.reducerPath] : booksApi.reducer
  },
  middleware: (getDefaultMiddleware)=>{
    return getDefaultMiddleware()
    .concat(booksApi.middleware)
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;


export const useSelectorCustom:TypedUseSelectorHook<RootState> = useSelector;