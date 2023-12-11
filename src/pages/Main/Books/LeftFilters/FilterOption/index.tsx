import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export function FilterOption({ title, isOpen, onToggle, renderContent }) {
  return (
    <div className="px-2 border  hover:border-indigo-200 hover:shadow-2xl rounded-[14px] mb-4">
      <div
        onClick={onToggle}
        className="flex justify-between items-center cursor-pointer h-[80px] "
      >
        <h3 className="font-revert-layer text-[20px]">{title}</h3>
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      {isOpen && <div className="filter-content">{renderContent()}</div>}
    </div>
  );
}
