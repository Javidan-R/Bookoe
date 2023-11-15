import { FC } from 'react';
import Button from '../../Atoms/Button';

export const Login: FC = () => {
  return (
    <>
      <Button
        style={{
                 color: '#6C5DD3'
        }} 
        className="
        w-[6.5625rem] h-[3.75rem] rounded-[0.875rem] bg-[#f0eeff] text-purple-500 font-bold py-2 px-4 rounded-xl ">
        <div className="text-[#6c5dd3] font-['Cairo'] text-lg font-bold leading-[normal]">Log In</div>
      </Button>
    </>
  );
};