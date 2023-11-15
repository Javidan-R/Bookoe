import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import menuicon from '../../../assets/images/menuicon.svg';
import rightchevron from '../../../assets/images/rightchevron.svg';
import Input from '../../../Atoms/Input';
import Button from '../../../Atoms/Button';
import { BsSearch } from 'react-icons/bs';

export const Menus: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <nav className='flex flex-row justify-center w-full'>
      <div className="relative  md-auto">
        <div className="flex border border-[#e1e1e1  rounded-bl-[0.875rem]  w-[11.5625rem] h-[3.75rem]
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

      <div className='
      w-[28rem] h-[3.75rem]
      flex flex-col  md:flex-row justify-center items-center
      '>
        <div className="w-full  md:w-96">
          <Input
            className="border h-[3.75rem] py-2 px-4 focus:outline-none focus:border-violet-500 flex-grow w-full md:w-96"
            type="text"
            name="search"
            placeholder="Search over 30 million book titles"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <Button
          className="shring bg-white  py-2 px-4 rounded  align-center mt-2 h-[3.75rem]
        sm:w-36 sm:flex sm:justify-center sm:items-center sm:border sm:rounded-none
        
        md:w-16  md:mt-0 md:rounded-r-2xl "
        >
          <BsSearch className="text-xl"  style={{color:'#6c5dd3' ,fontSize:'22px'}} />
        </Button>
      </div>

    
    </nav>
    
    
  );
};
