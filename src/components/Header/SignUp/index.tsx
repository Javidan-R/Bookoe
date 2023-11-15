import Button from '../../../Atoms/Button'
import { FC } from 'react'
import { AiOutlineUser } from 'react-icons/ai';

export const SignUp: FC = () => {
  return (
    <>
      <Button style={{
      }}
        className="
        background flex-shrink-0 w-[11.0625rem] h-[3.75rem] rounded-[0.875rem] bg-[#6c5dd3]
        
        flex items-center  justify-evenly   text-white font-bold py-2 px-4  shadow-violet-600/100

        shadow-2xl
        ">
              <AiOutlineUser className="text-xl" style={{fontSize:'26px'}} />
              <div className="text-white font-['Cairo'] text-lg font-bold leading-[normal]">Sign Up</div>
      </Button>
    </>
  );
};

