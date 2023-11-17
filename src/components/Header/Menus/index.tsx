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
    <nav className='flex flex-col md:flex-row justify-center w-full '>
      <div className="relative">
        <div className="flex border border-[#e1e1e1] rounded-bl-[0.875rem] w-full md:w-40 md:mt-0 md:rounded-l-2xl  md-auto h-[3.75rem] ">
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center text-sm font-medium text-blue border-orange-500 w-full"
          >
            <img src={menuicon} alt="menu icon" />
            <Link to="/" className="block px-4 py-2 text-gray-800 text-lg">Menu</Link>
            <img src={rightchevron} alt="" />
          </button>
        </div>
        {isOpen && (
          <div className="absolute right-0 mt-2 bg-violet-500 rounded-lg">
            <div className="py-2">
              {['Home', 'Books Grid', 'Books Detail Description', 'Books Detail Review' ].map((item, index) => (
                <Link
                  key={index}
                  to={`/${item.toLowerCase().replace(/\s/g, '-')}`}
                  className="block px-4 py-2 text-stone-900 hover:bg-gray-200"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className='w-full md:w-96 flex flex-row md:flex-row justify-center items-center'>
        <div className="w-full md:w-96">
          <Input
            className="border h-[3.75rem] py-2 px-4 focus:outline-none focus:border-violet-500 flex-grow w-full"
            type="text"
            name="search"
            placeholder="Search over 30 million book titles"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <Button
          className="hidden md:block xl:block shring bg-white py-2 px-4  align-center mt-2 h-[3.75rem] md:w-16 md:mt-0  md:mt-0 border rounded  md:rounded-r-2xl"
        >
          <BsSearch className="text-xl" style={{ color: '#6c5dd3', fontSize: '22px' }} />
        </Button>
      </div>
    </nav>
  );
};
