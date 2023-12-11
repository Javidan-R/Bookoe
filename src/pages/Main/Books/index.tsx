import { useState } from "react";
import { BookSale } from "../Home/BookSale";
import { Testimonials } from "../Home/Testimonials";
import { Pagination } from "./Pagination";
import { Grid } from "./Grid";
import { LeftFilters } from "./LeftFilters";
import { TitleBar } from "./TitleBar";
import { List } from "./List";
export const services = [
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
  const [view, setView] = useState(""); 

  const handleToggleEditorPicks = () =>
    setIsOpenEditorPicks(!isOpenEditorPicks);
  const handleTogglePublisher = () => setIsOpenPublisher(!isOpenPublisher);
  const handleToggleYear = () => setIsOpenYear(!isOpenYear);
  const handleToggleCategory = () => setIsOpenCategory(!isOpenCategory);
  const handleViewChange = (newView) => setView(newView);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <div className="col-span-full md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 ">
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
          <LeftFilters
            isOpenCategory={isOpenCategory}
            isOpenEditorPicks={isOpenEditorPicks}
            isOpenPublisher={isOpenPublisher}
            isOpenYear={isOpenYear}
            handleToggleCategory={handleToggleCategory}
            handleToggleEditorPicks={handleToggleEditorPicks}
            handleTogglePublisher={handleTogglePublisher}
            handleToggleYear={handleToggleYear}
          />
        </div>
        <div className="col-span-full md:col-span-2 lg:col-span-2 xl:col-span-3 2xl:col-span-4 p-1 ">
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
          <TitleBar onViewChange={handleViewChange} />
          {view === "grid" && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 my-6">
              <Grid />
              <Grid />
              <Grid />
              <Grid />
            </div>
          )}
          {view === "list" && (
            <List/>
          )}

          <Pagination />
        </div>
      </div>

      <BookSale />
      <Testimonials />
    </div>
  );
};
