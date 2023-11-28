import React from 'react';
import { SingleBooksTypes } from '../../types/type';
import { Star } from '../../Atoms/Star';

const MAX_TITLE_LENGTH = 40;

interface BookSaleComponentProps {
  book: SingleBooksTypes;
}

export const BookSaleComponent: React.FC<BookSaleComponentProps> = ({ book }) => {
  const { title, image, rating: { rate, count }, category, price } = book;

  function shortenString(str: string, maxLen: number) {
    if (str.length <= maxLen) {
      return str;
    }
    return str.substring(0, maxLen - 3) + '...';
  }

 
  return (
    <div className="flex-shrink-0 w-[13rem] md:w-[11rem] xl:w-[11rem] h-[30rem] m-auto overflow-hidden rounded-lg shadow-lg ">
      <div className="relative m-auto">
        <div className="flex-shrink-0 h-[18rem] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="absolute top-[1.5rem] left-0 w-[3.5rem] h-[2.375rem] rounded-tr-[1.25rem] rounded-br-[1.25rem] bg-[#ff754c] text-center flex items-center justify-center text-white">
          {rate}%
        </div>
      </div>

      <div className="text-[#11142d] font-['Cairo'] text-xl font-bold  my-4 h-[5rem] ">
        {shortenString(title, MAX_TITLE_LENGTH)}
      </div>
      <div className="['Sans'] text-[#6c5dd3] font-['Open text-sm leading-[normal] mt-2 px-4">
        {category}
      </div>
      <div className="flex justify-evenly items-center p-4">
        <Star rating={count} />
        <div className="flex justify-center gap-2">
          <div className="text-[#11142d] text-right font-['Cairo'] text-xl font-bold leading-[normal]">
            ${price}
          </div>
          <div className="text-[#aaa] text-right font-['Cairo'] font-semibold leading-[normal]">
            ${count}
          </div>
        </div>
      </div>
    </div>
  );
};

