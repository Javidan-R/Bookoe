import React, { useState } from "react";
import { BookSale } from "../Home/BookSale";
import { Testimonials } from "../Home/Testimonials";
import Button from "../../../Atoms/Button";
import StarRating from "../../../components/StarRating";
import { AiOutlineMenu } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import { BsGrid1X2 } from "react-icons/bs";
import { BiSortDown } from "react-icons/bi";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <div className="col-span-full md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 p-2">
          <h2
            className="text-2xl font-bold text-DarkPurple font-Cairo "
            style={{
              color: "var(--DarkPurple, #11142D)",
              fontFamily: "Cairo",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            Filter Option
          </h2>
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
                </select>
              </>
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
        <div className="col-span-full md:col-span-1 lg:col-span-2 xl:col-span-3 2xl:col-span-4 p-1 my">
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 my-6">
           <BooksCard/>
           <BooksCard/>
           <BooksCard/>
           <BooksCard/>
           <BooksCard/>
           <BooksCard/>
           <BooksCard/>
           <BooksCard/>
           <BooksCard/>
          </div>

        <BooksPagination/>
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
      <div
        onClick={onToggle}
        className="flex justify-between items-center cursor-pointer h-[80px]"
      >
        <h3 className="font-revert-layer text-[20px]">{title}</h3>
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      {isOpen && <div className="filter-content">{renderContent()}</div>}
    </div>
  );
}


function BooksCard() {
  return(
    <div className="col-span-full md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 p-2 bg-white border border-gray-200  shadow rounded-2xl ">
    <div className="w-full max-w-sm rounded-3xl ">
      <a href="#">
        <img
          className="p-8 rounded-3xl "
          src="https://flowbite.com/docs/images/products/apple-watch.png"
          alt="product image"
          style={{
            width: "100%",
            height: "270px",
            background: "transparent",
            objectFit: "contain",
          }}
        />
      </a>
      <div className="px-5 pb-5">
        <div>
          <h4 className="text-3xl font-bold  text-zinc-900  my-2">
            ALL GOOD NEWS
          </h4>
        </div>
        <a href="#">
          <h5 className="text-sm  tracking-tight text-indigo-500">
            Apple Watch , Aluminium Case, Starlight Sport
          </h5>
        </a>

        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <StarRating rating={4} />
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mb-2">
          <span className="text-3xl font-bold text-gray-900 text-white">
            $599
          </span>
          <span className="text-2xl  text-gray-900 line-through">
            $700
          </span>
        </div>
        <div className="flex items-center ">
          <Button className=" w-full flex items-center justify-evenly rounded-xl bg-indigo-500 p-2 text-white hover:bg-orange hover:text-slate-950">
            <MdOutlineShoppingCart />
            <p>Add To Cart</p>
          </Button>
        </div>
      </div>
    </div>
  </div>
  )
  
}


function BooksPagination() {
  return(
    <nav aria-label="Page navigation example">
    <div className="inline-flex justify-center items-center gap-4 text-base h-10 ">
        <Button className="flex items-center  justify-center gap-2  px-4 h-10 leading-tight  text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <FaChevronLeft />
          <p style={{ fontSize: "18px" }}>Previous </p>
        </Button>

      <div className="flex justify-center items-center ">
      <a
          href="#"
          aria-current="page"
          className="flex items-center justify-center px-2 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          1
        </a>
        <a
          href="#"
          className="flex items-center justify-center px-2 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          2
        </a>

        <a
          href="#"
          className="flex items-center justify-center px-2 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 rounded-r-lg dark:border-gray-700 dark:bg-gray-700 dark:text-white"
        >
          3
</a>
      </div>
        <Button className="flex items-center  justify-center gap-2 px-6 h-10 leading-tight  text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <p style={{ fontSize: "18px" }}>Next </p>
          <FaChevronRight />
        </Button>
     </div>
  </nav>
  )
  
}