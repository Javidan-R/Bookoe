import  { FC } from 'react'
import { GrLocation } from 'react-icons/gr'
import { IoCallOutline, IoMailOutline } from 'react-icons/io5'



export const OutStore: FC = () => {
  return (
    <div className=''>
      <div className=' w-auto h-28 rounded-xl bg-gray-200'>
      </div>
      <div className='flex justify-start items-center mt-4 gap-2'>
        <GrLocation />
        <h3 className='w-80 text-md'>Our Store  832  Thompson Drive, San Fransisco
          CA 94107,United States
        </h3>
      </div>
      <div className='flex justify-start items-center mt-5 gap-2'>
        <IoCallOutline />
        +123 345123 556
      </div>
      <div className='flex justify-start items-center mt-5 gap-2'>
        <IoMailOutline />
        support@bookoe.id
      </div>
    </div>
  )
}