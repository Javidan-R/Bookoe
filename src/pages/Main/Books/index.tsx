import React, { useState } from "react";
import { BookSale } from "../Home/BookSale";
import { Testimonials } from "../Home/Testimonials";
import Button from "../../../Atoms/Button";
import { AiOutlineMenu } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import { BsGrid1X2 } from "react-icons/bs";
import { BiSortDown } from "react-icons/bi";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
const services = [
  {
    heading: "Quick Delivery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    heading: "Secure Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    heading: "Best Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    heading: "Return Guarantee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

export const Books = () => {
  const [data, setData] = useState(services);
   const [isOpenEditorPicks, setIsOpenEditorPicks] = useState(false);
  const [isOpenPublisher, setIsOpenPublisher] = useState(false);
  const [isOpenYear, setIsOpenYear] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  const handleToggleEditorPicks = () => {
    setIsOpenEditorPicks(!isOpenEditorPicks);
  };

  const handleTogglePublisher = () => {
    setIsOpenPublisher(!isOpenPublisher);
  };

  const handleToggleYear = () => {
    setIsOpenYear(!isOpenYear);
  };

  const handleToggleCategory = () => {
    setIsOpenCategory(!isOpenCategory);
  };

  return (
    <div>
     <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
     <div className="col-span-full md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 p-2">
        <h2 className="text-2xl font-bold text-DarkPurple font-Cairo "  style={{
              color: "var(--DarkPurple, #11142D)",
              fontFamily: "Cairo",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}>Filter Option</h2>
        <FilterOption
          title="Editor Picks"
          isOpen={isOpenEditorPicks}
          onToggle={handleToggleEditorPicks}
          renderContent={() => (
            <ul>
              {services.map((filter, index) => (
                <li key={index}>
                  +<a href="#">{filter.heading}</a>
                </li>
              ))}
            </ul>
          )}
        />
        <FilterOption
          title="Choose Publisher"
          isOpen={isOpenPublisher}
          onToggle={handleTogglePublisher}
          renderContent={() => (
            <>
            <select id="publisher">
              <option value="publisher1">Publisher 1</option>
              <option value="publisher2">Publisher 2</option>
              {/* Add more options as needed */}
            </select></>  
          )}
        />
        <FilterOption
          title="Select Year"
          isOpen={isOpenYear}
          onToggle={handleToggleYear}
          renderContent={() => (
            <>
            
            <select id="year">
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              {/* Add more options as needed */}
            </select>
          </>
          )}
        />
        <FilterOption
          title="Shop by Category"
          isOpen={isOpenCategory}
          onToggle={handleToggleCategory}
          renderContent={() => (
            <>
             
              <select id="category">
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                {/* Add more options as needed */}
              </select>
            </>
          )}
        />
        <div>
            <input type="range" name="" id="" />
          </div>
          <Button className="bg-indigo-500">Refine Search</Button>
          <Button className="primary">Reset Filter</Button>
      </div>
      <div className="col-span-full md:col-span-1 lg:col-span-2 xl:col-span-3 2xl:col-span-4 p-1">
          <h3
            style={{
              color: "var(--DarkPurple, #11142D)",
              fontFamily: "Cairo",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            Books
          </h3>
          <div
            className="flex justify-between align-center items-center p-3"
            style={{
              borderRadius: "14px",
              border: "1px solid var(--Grey-03, #F0F0F0)",
              width: "100%",
              height: "60px",
            }}
          >
            <div className="books-left flex justify-center gap-4">
              <div className="cursor-pointer">Today</div>
              <div className="cursor-pointer">This Week</div>
              <div className="cursor-pointer">This Month</div>
            </div>
            <div className="books-right flex justify-center gap-4 items-center ">
              <AiOutlineMenu className="cursor-pointer" />
              <BsGrid className="cursor-pointer" />
              <BsGrid1X2 className="cursor-pointer" />
              <div className="flex justify-center gap-1 items-center p-y-[9px] border-l-2 cursor-pointer">
                <BiSortDown />
                <h3
                  style={{
                    fontSize: "20px",
                    marginBottom: "5px",
                  }}
                >
                  Newest
                </h3>
                <FaChevronDown />
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookSale />
      <Testimonials />
    </div>
  );
};


function FilterOption({ title, isOpen, onToggle, renderContent }) {
  return (
    <div className="p-1 px-3 border rounded-[14px] mb-4">
      <div onClick={onToggle} className="flex justify-between items-center cursor-pointer h-[80px]">
        <h3 className="font-revert-layer text-[20px]">{title}</h3>
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      {isOpen && (
        <div className="filter-content">
          {renderContent()}
        </div>
      )}
    </div>
  );
}