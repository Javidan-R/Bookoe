import { FC } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

interface FollowUsProps {}

export const FollowUs: FC<FollowUsProps> = () => {
  return (
    <div>
      <div className=' mb-2'>Follow Us</div>
      <div className='flex justify-between'>
        <Link to='/facebook' className='border rounded-xl p-3  text-lg  hover:bg-red-400'>
          <FaFacebookF />
        </Link>
        <Link to='/youtube' className='border rounded-xl p-3  text-lg  hover:bg-red-400'>
          <FaYoutube />
        </Link>
        <Link to='/twitter' className='border rounded-xl p-3  text-lg  hover:bg-red-400'>
          <FaTwitter />
        </Link>
        <Link to='/linkedin' className='border rounded-xl p-3  text-lg  hover:bg-red-400'>
          <FaLinkedinIn />
        </Link>
        <Link to='/instagram' className='border rounded-xl p-3  text-lg  hover:bg-red-400'>
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};
