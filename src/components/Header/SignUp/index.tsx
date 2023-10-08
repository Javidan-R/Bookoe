import Button from '../../../Atoms/Button'
import { FC } from 'react'
import { AiOutlineUser } from 'react-icons/ai';

export const SignUp: FC = () => {
  return (
    <>
      <Button style={{
      }}
        className="flex items-center  justify-around w-32 h-16 bg-violet-600  text-white font-bold py-2 px-4 rounded-xl shadow-violet-600/80

        shadow-2xl
        ">
              <AiOutlineUser className="text-xl" />
        Sign Up
      </Button>
    </>
  );
};

