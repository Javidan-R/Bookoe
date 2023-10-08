import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import menuicon from '../../../assets/images/menuicon.svg';
import rightchevron from '../../../assets/images/rightchevron.svg';

export const Menus: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block  sm:w-full md-auto">
      <div className="flex border rounded-l-lg h-16
        sm:flex sm:justify-center sm:items-left sm:border sm:rounded-none sm:mb-6 
        
        md:mt-0 md:rounded-l-2xl md:mb-0
         ">
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center  text-sm font-medium text-blue border-orange-500 w-full md:w-40"
        >
          <img src={menuicon} alt="menu icon" />
          <Link to="/" className="block px-4 py-2 text-gray-800 text-lg">Menu</Link>
          <img src={rightchevron} alt="" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-violet-500 rounded-lg">
          <div className="py-2">
            <Link
              to="/"
              className="block px-4 py-2 text-stone-900 hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/books-grid"
              className="block px-4 py-2 text-stone-900 hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Books Grid
            </Link>
            <Link
              to="/books-list"
              className="block px-4 py-2 text-stone-900 hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Books List
            </Link>
            <Link
              to="/book-detail-description"
              className="block px-4 py-2 text-stone-900 hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Books Detail Description
            </Link>
            <Link
              to="/book-detail-review"
              className="block px-4 py-2 text-stone-900 hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Books Detail Review
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
