import React from "react";
import Button from "../../../../Atoms/Button";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export function Pagination() {
  return (
    <nav aria-label="Page navigation example">
      <div className="inline-flex justify-center items-center gap-4 text-base h-10 ">
        <Button className="flex items-center  justify-center gap-2  px-4 h-10 leading-tight  text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <FaChevronLeft />
          <p style={{ fontSize: "18px" }}>Previous </p>
        </Button>
        <div className="flex justify-center items-center ">
          <a href="#" aria-current="page" className="flex items-center justify-center px-2 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            1
          </a>
          <a href="#" className="flex items-center justify-center px-2 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            2
          </a>
          <a href="#" className="flex items-center justify-center px-2 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 rounded-r-lg dark:border-gray-700 dark:bg-gray-700 dark:text-white">
            3
          </a>
        </div>
        <Button className="flex items-center  justify-center gap-2 px-6 h-10 leading-tight  text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <p style={{ fontSize: "18px" }}>Next </p>
          <FaChevronRight />
        </Button>
      </div>
    </nav>
  );

}
