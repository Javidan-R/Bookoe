import React, { FC } from 'react';

interface NewsLetterProps {
  image: string;
  count: number;
  title: string;
}

export const NewsLetterComponent: FC<NewsLetterProps> = ({ image, count, title }) => {
  return (
    <div className="flex-shrink-0 w-[13rem] h-[13rem] bg-white shadow-md rounded-md m-auto " style={{cursor:'pointer'}}>
      <div className='flex justify-center'>
        <img src={image} alt="" className="w-auto h-20 object-cover mb-4 rounded-md" />
      </div>
      <div className="text-center">
        <span className="text-[#11142d] font-Cairo text-2xl font-bold leading-normal">
          {count}
        </span>
        <div className="text-[#aaa] font-Cairo text-xl font-semibold leading-normal">
          {title}
        </div>
      </div>
    </div>
  );
};

