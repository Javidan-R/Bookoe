import React from "react";
// dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700
export const List = () => {
  return (
    <div className="w-full border border-gray-200  hover:border-indigo-200 hover:shadow-2xl rounded-2xl p-3 my-4 ">
      <div  className="flex flex-col items-center gap-4 bg-white  rounded-lg  md:flex-row md:max-w-xl ">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48  md:rounded-lg"
          src="https://flowbite.com/docs/images/blog/image-4.jpg"
          alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <div>

            </div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
    </div>
    </div>
  );
};
