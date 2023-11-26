import React from 'react';

const SkeletonLoader: React.FC = () => {
  return (
    <div className="flex-shrink-0 w-[13rem] md:w-[11rem] xl:w-[11rem] h-[30rem] m-auto bg-gray-300 animate-pulse">
      <div className="relative m-auto">
        <div className="flex-shrink-0 h-[18rem] overflow-hidden bg-gray-400 rounded-t-lg" />
        <div className="absolute top-[1.5rem] left-0 w-[3.5rem] h-[2.375rem] rounded-tr-[1.25rem] rounded-bl-[1.25rem] bg-[#ff754c] text-center flex items-center justify-center text-white">
          {/* Rating Skeleton */}
        </div>
      </div>

      <div className="text-[#11142d] font-['Cairo'] text-xl font-bold leading-[normal] my-4 h-[5rem] p-4 bg-gray-400" />
      <div className="['Sans'] text-[#6c5dd3] font-['Open text-sm leading-[normal] px-4 bg-gray-400" />
      <div className="flex justify-evenly items-center p-4">
        {/* Star Rating Skeleton */}
        <div className="bg-gray-400 w-8 h-8 rounded-full"></div>
        <div className="flex justify-center gap-2">
          <div className="text-[#11142d] text-right font-['Cairo'] text-xl font-bold leading-[normal] bg-gray-400 w-16" />
          <div className="text-[#aaa] text-right font-['Cairo'] font-semibold leading-[normal] bg-gray-400 w-16" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
