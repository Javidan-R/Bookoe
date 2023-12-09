import React from 'react';

const SkeletonLoader: React.FC = () => {
  return (
    <div className="flex-shrink-0 w-[13rem] md:w-[11rem] xl:w-[11rem] h-[30rem] m-auto overflow-hidden rounded-lg shadow-lg  bg-gray-300">
    <div className="relative m-auto">
      <div className="flex-shrink-0 h-[18rem] overflow-hidden">
    
      </div>
      <div className="absolute top-[1.5rem] left-0 w-[3.5rem] h-[2.375rem] rounded-tr-[1.25rem] rounded-br-[1.25rem] bg-[#ff754c] text-center flex items-center justify-center text-white">
      </div>
    </div>

    <div className="text-[#11142d] font-['Cairo'] text-xl font-bold  my-4 h-[5rem] ">
    </div>
    <div className="['Sans'] text-[#6c5dd3] font-['Open text-sm leading-[normal] mt-2 px-4">
    </div>
    <div className="flex justify-evenly items-center p-4">
      <div className="flex justify-center gap-2">
        <div className="text-[#11142d] text-right font-['Cairo'] text-xl font-bold leading-[normal]">
        </div>
        <div className="text-[#aaa] text-right font-['Cairo'] font-semibold leading-[normal]">
        </div>
      </div>
    </div>
  </div>
  );
};

export default SkeletonLoader;
