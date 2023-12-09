// BookSale.tsx
import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { BookSaleComponent } from "../../../../components/BookSaleComponent";
import { useGetBooksQuery } from "../../../../store/books/books-api";
import { SingleBooksTypes } from "../../../../types/type";
import SkeletonLoader from "../../../../components/BookSaleComponent/SekeletonComponent";

import { useSelectorCustom } from "../../../../store/store";
import { setBooks } from "../../../../store/books/book-slice";


export const BookSale: FC = () => {
  const dispatch = useDispatch();
  const { books } = useSelectorCustom((state) => state.books);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_ENDPOINT = "https://fakestoreapi.com/products";
      try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchedData = await response.json();
        setData(fetchedData);
        dispatch(setBooks({ books: fetchedData }));
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, [dispatch]);
  const { isLoading, isError } = useGetBooksQuery(0);
  let content;

  if (isLoading) {
    content = (
      <section className="pt-10 m-auto flex flex-wrap gap-2">
        {Array.from({ length: 6 }, (_, index) => (
          <SkeletonLoader key={index} />
        ))}
      </section>
    );
  } else if (isError) {
    content = "Error";
  } else {
    content = (
      <Swiper
        spaceBetween={10}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          780: {
            slidesPerView: 3,
          },
          960: {
            slidesPerView: 4,
          },
          1080: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
      >
        {data.map((book: SingleBooksTypes) => (
          <SwiperSlide key={book.id}>
            <BookSaleComponent book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <section className="pt-10 m-auto">
      <div className="flex flex-wrap items-center justify-between mb-4">
        <div className="text-[#11142d] font-['Cairo'] text-[3.125rem] font-bold leading-[normal]">
          Books on Sale
        </div>
      </div>
      {content}
    </section>
  );
};
