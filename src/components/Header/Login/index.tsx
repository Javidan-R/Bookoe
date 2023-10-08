import { FC } from 'react';
import Button from '../../../Atoms/Button';

export const Login: FC = () => {
  return (
    <>
      <Button
        style={{
                 color: '#6C5DD3'
        }} 
        className="w-24 h-15 bg-gray-200  text-purple-500 font-bold py-2 px-4 rounded-xl ">
        Log In
      </Button>
    </>
  );
};