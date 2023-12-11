import { AiOutlineMenu } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import { BiSortDown } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";

export function TitleBar({onViewChange}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2  p-2 rounded-2xl w-full h-auto border">
      <div className="books-left flex justify-start items-center gap-4 m-auto mb-4 md:m-auto sm:m-auto">
        <div className="cursor-pointer">Today</div>
        <div className="cursor-pointer">This Week</div>
        <div className="cursor-pointer">This Month</div>
      </div>
      <div className="flex justify-center md:justify-end  items-center gap-4 md:m-auto sm:m-auto">
        <div onClick={() => {onViewChange("list")}}>
          <AiOutlineMenu className="cursor-pointer" />
        </div>
        <div onClick={() => {onViewChange("grid")}}>
          <BsGrid className="cursor-pointer" />
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <BiSortDown />
          <h3 className="text-base md:text-lg lg:text-xl">Newest</h3>
          <FaChevronDown />
        </div>
      </div>
    </div>
  );
}
