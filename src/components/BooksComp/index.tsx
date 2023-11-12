import React, { FC } from 'react';

const books = [
  {
    image: "../../assets/images/approve.svg",
    altName: "one",
  },
  {
    image: "../../assets/images/approve.svg",
    altName: "one",
  },
  {
    image: "../../assets/images/approve.svg",
    altName: "one",
  },
  {
    image: "../../assets/images/approve.svg",
    altName: "one",
  },
  {
    image: "../../assets/images/approve.svg",
    altName: "one",
  },
  {
    image: "",
    altName: "one",
  },
];

export const BooksComp: FC = () => {
  return (
    <>
      {books.length > 0 ? (
        books.map((b, index) => (
          <div key={index} className="flex justify-center items-center  w-[11.9375rem] h-[17rem] rounded-[0.875rem] bg-orange m-auto">
            <img src={b.image} alt={b.altName} />
          </div>
        ))
      ) : (
        <h3>yoxdur</h3>
      )}
    </>
  );
};
