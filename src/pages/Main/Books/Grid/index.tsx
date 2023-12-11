import React, { useState } from 'react';
import Button from "../../../../Atoms/Button";
import StarRating from "../../../../components/StarRating";
import { MdOutlineShoppingCart } from "react-icons/md";

export function Grid() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`col-span-full md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 p-2 bg-white border border-gray-200 ${
        isHovered ? "hover:border-indigo-200 hover:shadow-2xl" : ""
      } rounded-2xl `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#">
        <img
          className="p-4 rounded-3xl"
          src="https://flowbite.com/docs/images/products/apple-watch.png"
          alt="product image"
          style={{
            width: "100%",
            height: "250px",
            background: "transparent",
            objectFit: "contain",
          }}
        />
      </a>
      <div className={`px-5 pb-5`}>
        <div>
          <h4 className="text-3xl font-bold text-zinc-900 my-2">
            ALL GOOD NEWS
          </h4>
        </div>
        <a href="#" className={` ${isHovered ? "hidden" : ""}`}>
          <h5 className="text-sm tracking-tight text-indigo-500 text-center">
            Apple Watch , Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className={`flex items-center mt-2  ${isHovered ? "hidden" : ""}`}>
          <div className="flex items-center space-x-1 rtl:space-x-reverse m-auto">
            <StarRating rating={4} />
          </div>
        </div>
      </div>
      <div className={`flex items-center justify-center gap-4 mb-2 ${!isHovered ? "hidden" : ""}`}>
        <span className="text-3xl font-bold text-gray-900">$599</span>
        <span className="text-2xl text-gray-900 line-through">$700</span>
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
