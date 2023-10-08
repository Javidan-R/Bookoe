import React from 'react'
import Button from '../../../../../Atoms/Button';
import { Link } from 'react-router-dom';


export const BestSellerBanner = () => {
  return (
    <div className=' '>
        <h3 className='text-sm mb-2 '>Best Seller</h3>
        <h5 className='text-sm mt-2  '>Based sales this week</h5>
        <div className='w-40 h-56 mt-2 mb-2 bg-gray-100 rounded-xl flex justify-center items-center  m-auto'></div>
        <p className='text-sm mt-1 mb-1 '>Pushing Clouds</p>
        <p className='text-sm mt-1  '>ADVANTURE, SCIENCE, COMEDY</p>
        <Button className=' w-40 h-10 bg-white text-center rounded-xl flex justify-center items-center  m-auto '> <Link to={"/"} className='text-sm'>(60.00) USD 45.25 </Link></Button>

    </div>
  )
}
