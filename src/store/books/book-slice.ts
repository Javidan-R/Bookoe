// booksSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

// Define the state type
interface BooksState {
  books: any[]; // Adjust the type based on your actual book structure
}

// Define the initial state
const initialState: BooksState = {
  books: [],
};

// Create a slice
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<{ books: any[] }>) => {
      state.books = action.payload.books;
    },
    // Add other reducers as needed
  },
});

// Export the actions
export const { setBooks } = booksSlice.actions;

// Export the reducer
export default booksSlice.reducer;

// Selectors if needed
export const selectBooks = (state: RootState) => state.books.books;



