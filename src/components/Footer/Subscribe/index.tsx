import React, { FC } from 'react';

export const Subscribe: FC = () => {
  return (
    <div className='w-96 flex justify-center mt-6 mb-6'>
      <div className='flex-shrink-0 max-w-[693px] w-full bg-[#6c5dd3] rounded-[0.875rem] p-4'>
        <h1 className='text-white text-center  text-2xl font-semibold mb-4'>
          Subscribe to our newsletter for the latest updates on new books
        </h1>
        <div className='w-full flex justify-center mt-4'>
          <form className='flex w-full max-w-[652px]'>
            <input
              type="text"
              placeholder='Type your email here'
              className="flex-grow h-12 rounded-l-[0.875rem] bg-[#7c6de3] pl-4"
            />
            <button className="flex-shrink-0 w-32 h-12 rounded-r-[0.875rem] bg-white text-[#6c5dd3] font-semibold">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
