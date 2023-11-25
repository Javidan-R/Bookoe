import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BookSaleComponent } from '../../../../components/BookSaleComponent';
import { useSelectorCustom } from '../../../../store/store';
import { setBooks } from '../../../../store/books/book-slice';

export const BookSale: FC = () => {
  const dispatch = useDispatch();
  const { books } = useSelectorCustom((state) => state.books);
  const [data, setData] = useState([]); // Add a state variable to hold the fetched data

  useEffect(() => {
    const fetchData = async () => {
      // Assuming your API endpoint for books is something like this
      const API_ENDPOINT = 'https://fakestoreapi.com/products';

      try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const fetchedData = await response.json();

        // Update the local state with the fetched data
        setData(fetchedData);

        // Dispatch the setBooks action with the fetched data
        dispatch(setBooks({ books: fetchedData }));
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [dispatch]);

  return (
    <section className='pt-10 m-auto'>
      <div className="text-[#11142d] font-['Cairo'] text-[3.125rem] font-bold leading-[normal]">Books on Sale</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-12'>
        {/* Render your BookSaleComponent based on the fetched data */}
        {data.map((book) => (
          <div key={book.id} className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.3333%-2rem)] xl:w-[calc(16.6667%-2rem)] mb-8 mx-1 flex items-strech content-strech">
            <BookSaleComponent book={book} />
          </div>
        ))}
      </div>
    </section>
  );
};

// Assuming you have a BookSaleComponent that receives a 'book' prop
// Update this according to your actual component
