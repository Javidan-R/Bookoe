import React, { FC } from 'react'

export const Subscribe: FC = () => {
    return (
        <div className='flex-shrink-0 w-auto  h-[22.875rem] rounded-[32px] bg-[#6c5dd3] mt-6 mb-6'>
            <h1 className='flex justify-center align-center  pt-12 pb-4'>
                <div className="flex-shrink-0 w-[693px] h-[6.875rem] text-white text-center font-['Cairo'] text-[2.5rem] font-semibold leading-[55px]">Subscribe our newsletter for newest books updates</div>
            </h1>
            <div className='w-full flex justify-center  h-[4.25rem] mt-8 '>
                <form className=' m-auto flex  rounded-[0.875rem] bg-[#7c6de3]  '>
                    <input type="text" placeholder='Type your email here' className="flex-shrink-0 w-[652px] h-[4.25rem] rounded-[0.875rem] bg-[#7c6de3] pl-6 " />
                    <button className="background flex-shrink-0 w-[10.375rem] h-[4.25rem] rounded-tr-[0.875rem] rounded-br-[0.875rem] bg-white" > SUBSCRIBE</button>
                </form>
            </div>


        </div>
    )
}
