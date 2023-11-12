import React from 'react'
import { Star } from '../../Atoms/Star'



export const BookSaleComponent = () => {
    return (
        <>
            <div className='flex-shrink-0 w-[11rem] sm:w-[13rem] h-[30rem] m-auto '>
                <div className="relative m-auto">
                    <div className="flex-shrink-0  w-[11rem]  h-[18rem] rounded-[0.875rem] bg-[#c4c4c4]">
                        <img src="" alt="" className="w-full h-full object-cover rounded-[0.875rem]" />
                    </div>
                    <div className="absolute top-10  left-0 w-[3.5375rem] h-[2.375rem] rounded-tr-[1.25rem] rounded-br-[1.25rem] bg-[#ff754c] text-center flex items-center justify-center">
                        50%
                    </div>
                </div>

                <div className="text-[#11142d] font-['Cairo'] text-xl font-bold leading-[normal] mt-4 ">The Missadventure of..</div>
                <div className="['Sans'] text-[#6c5dd3] font-['Open text-sm leading-[normal] mt-2 mb-4">ADVANTURE, SURVIVAL</div>
                <div className='dflex justify-between' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Star />
                    <div className='dflex justify-center' style={{ display: 'flex', justifyContent: 'center', gap:'10px'}}>
                        <div className="text-[#11142d] text-right font-['Cairo'] text-xl font-bold leading-[normal]">$45.4</div>
                        <div className="text-[#aaa] text-right font-['Cairo'] font-semibold leading-[normal]">$98.4</div>
                    </div>
                </div>
            </div>



        </>
    )
}
