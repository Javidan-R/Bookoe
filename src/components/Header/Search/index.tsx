import { FC, useState } from 'react';
import Input from '../../../Atoms/Input';
import { BsSearch } from 'react-icons/bs';
import Button from '../../../Atoms/Button';

export const Search: FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col w-full md:flex-row justify-center items-center">
      <div className="w-full md:w-96">
        <Input
          className="border h-16 py-2 px-4 focus:outline-none focus:border-violet-500 flex-grow w-full md:w-96"
          type="text"
          name="search"
          placeholder="Search over 30 million book titles"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <Button
        className="shring bg-white  py-2 px-4 rounded h-16 align-center mt-2
        sm:w-36 sm:flex sm:justify-center sm:items-center sm:border sm:rounded-none
        
        md:w-16  md:mt-0 md:rounded-r-2xl "
      >
        <BsSearch className="text-xl" />
      </Button>
    </div>
  );
};
