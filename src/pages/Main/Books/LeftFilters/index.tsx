import React from "react";
import Button from "../../../../Atoms/Button";
import { FilterOption } from "./FilterOption";
import { services } from "..";

export function LeftFilters({ isOpenEditorPicks, isOpenCategory, isOpenPublisher, isOpenYear, handleToggleEditorPicks, handleTogglePublisher, handleToggleYear, handleToggleCategory }) {
  return (
    <>
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
        )} />
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
        )} />
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
        )} />
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
        )} />
      <div>
        <input type="range" name="" id="" />
      </div>
      <Button className="bg-indigo-500">Refine Search</Button>
      <Button className="primary">Reset Filter</Button>
      </>
  );

}
