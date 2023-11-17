import React from 'react'
import StarRating from '../StarRating'


export const TestimonialsComponent = () => {
    return (
        <div className="background flex-shrink-0 w-[20rem] h-[12.9375rem] rounded-[0.875rem] bg-white shadow pt-2 pb-2  m-auto">
            <div className="Sans'] flex-shrink-0 w-[18rem] h-[6rem] text-black text-center font-['Open text-[1.1rem] font-semibold leading-[normal] m-auto">Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!</div>
            <div className=' w-96 flex justify-start items-center gap-4 m-auto'>
                <div className='flex justify-center  items-center '>
                    <div>
                        <svg width={71} height={71} viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35.5" cy="35.5" r="31.5" fill="#C4C4C4" stroke="white" strokeWidth={8} />
                        </svg>
                    </div>
                    <div>
                        <div className="Sans'] text-[#3d3d3d] text-center font-['Open text-lg font-bold leading-[normal]">Steve Henry</div>
                        <div className="Sans'] text-[#3d3d3d] text-center font-['Open text-sm leading-[normal]">Book Lovers</div>
                    </div>  
                </div>
                <div>
                    <StarRating rating={4.8} />

                </div>
            </div>
        </div>
    )
}
