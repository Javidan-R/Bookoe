import React, { useState } from 'react';
import Button from "../../../../Atoms/Button";
import StarRating from "../../../../components/StarRating";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsBookmarkHeartFill, BsBookmarkHeart } from "react-icons/bs";

export function Grid() {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`col-span-full md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 p-2 bg-white border border-gray-200 ${
        isHovered ? "hover:border-indigo-200 hover:shadow-2xl" : ""
      } rounded-2xl relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#" className='relative '>
        <img
          className="p-4 rounded-3xl w-full h-auto"
          src="https://flowbite.com/docs/images/products/apple-watch.png"
          alt="product image"
        />
        <div className={`absolute top-8 left-30 sm:top-2 sm:left-30 ${isHovered ? "visible" : "hidden"}`}>
          {isSelected ? <BsBookmarkHeartFill style={{ fontSize: '40px' }} /> : <BsBookmarkHeart style={{ fontSize: '40px' }} />}
        </div>
      </a>
      <div className="px-5 pb-5">
        <div>
          <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-zinc-900 my-2">
            ALL GOOD NEWS
          </h4>
        </div>
        <a href="#" className={`${isHovered ? "hidden" : ""}`}>
          <h5 className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-lg tracking-tight text-indigo-500 text-center">
            Apple Watch , Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className={`flex items-center mt-2 ${isHovered ? "hidden" : ""}`}>
          <div className="flex items-center space-x-1 rtl:space-x-reverse m-auto">
            <StarRating rating={4} />
          </div>
        </div>
      </div>
      <div className={`flex items-center justify-center gap-4 mb-2 ${!isHovered ? "hidden" : ""}`}>
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold text-gray-900">$599</span>
        <span className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-2xl text-gray-900 line-through">$700</span>
      </div>
      <div className={`flex items-center mt-6 ${!isHovered ? "hidden" : ""}`}>
        <Button className="w-full flex items-center justify-evenly rounded-xl bg-indigo-500 p-2 text-white hover:bg-orange hover:text-slate-950">
          <MdOutlineShoppingCart />
          <p>Add To Cart</p>
        </Button>
      </div>
    </div>
  );
}
