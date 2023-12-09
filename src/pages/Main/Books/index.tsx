import React, { useState } from "react";
import { BookSale } from "../Home/BookSale";
import { Testimonials } from "../Home/Testimonials";
import Button from "../../../Atoms/Button";

const services = [
    
  {
      heading: "Quick Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
      heading: "Secure Payment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
      heading: "Best Quality",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
      heading: "Return Guarantee",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

export const Books = () => {
  const [isOpenOption, setIsOpenOption] = useState(false);
  const [data,setData] = useState(services)

  
  const HandleOpenFilter = () => {
    setIsOpenOption(!isOpenOption);
  };

  return (
    <div>
      <div className=" w-full flex justify-center gap-2 ">
        <div
          className="left-area w-2/1"
          style={{
            width: "32%",
            height: "669px",
            flexShrink: 0,
            borderRadius: "14px",
            border: "1px solid var(--Grey-03, #F0F0F0)",
            background: "var(--White, #FFF)",
          }}
        >
          <h3>Filter Option</h3>
          <FilterOption
            isOpenOption={isOpenOption}
            HandleOpenFilter={HandleOpenFilter}
            data={data}
          >
            Editor Picks
          </FilterOption>

          {/* <FilterOption
            isOpenOption={isOpenOption}
            HandleOpenFilter={HandleOpenFilter}
          >
            Choose Publisher
          </FilterOption>
          <FilterOption
            isOpenOption={isOpenOption}
            HandleOpenFilter={HandleOpenFilter}
          >
            Select Year
          </FilterOption> */}
          {/* <FilterOption
            isOpenOption={isOpenOption}
            HandleOpenFilter={HandleOpenFilter}
          >
            Shop by Category
          </FilterOption> */}
          <select name="" id="">
            <label htmlFor=""></label>
            <option value=""></option>
          </select>
          <select name="" id="">
            <label htmlFor=""></label>
            <option value=""></option>
          </select>

          <div>
            <input type="range" name="" id="" />
          </div>
          <Button className="bg-indigo-500">Refine Search</Button>
          <Button className="primary">Reset Filter</Button>
        </div>
        <div
          className="right-area w-2/1 w-full"
          style={{
            width: "67%",
            height: "63px",
            flexShrink: 0,
            borderRadius: "14px",
            border: "1px solid var(--Grey-03, #F0F0F0)",
          }}
        >
          Books
        </div>
      </div>

      <BookSale />
      <Testimonials />
    </div>
  );
};

function FilterOption({ children, HandleOpenFilter, isOpenOption, data }) {
  return (
    <div className="p-4 border rounded-lg">
      <div onClick={HandleOpenFilter} className="flex justify-between cursor-pointer">
        <h3 style={{ fontFamily: "revert-layer", fontSize: "20px" }}>{children}</h3>
        <span>{isOpenOption ? "Up" : "Down"}</span>
      </div>
      {isOpenOption && <div className="filter-content">{services.map((filter,index)=>(
        <li key={index}>
          +<a href="#">{filter.heading}</a>
        </li>
      ))}</div>}
    </div>
  );
}

