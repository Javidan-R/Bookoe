import React from 'react'

export const LatestNewsComponent = () => {
  return (
    <div>
      <div className="flex-shrink-0 w-[18rem] h-[13.125rem] rounded-[0.625rem] bg-[#c4c4c4]" >
        <img src="" alt=""className="w-full h-full object-cover rounded-[0.875rem]" />
      </div>
      <div className="w-[18rem] text-[#11142d] font-['Cairo'] text-lg font-semibold leading-[normal] mt-2">
        Why reading is important for our children?
      </div>
      <div className="w-[18rem] text-black/50 font-['Open text-sm leading-[normal] mt-4 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...
      </div>
      <div className='flex justify-start gap-4' > 
        <div>
          <svg width={54} height={54} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={27} cy={27} r={27} fill="#C4C4C4" />
          </svg>
        </div>
        <div >
          <div className="text-[#11142d] font-['Poppins'] text-sm font-semibold leading-[normal]">
            Lidya Humble
          </div>
          <div className="Sans'] text-[#aaa] font-['Open text-sm leading-[normal]">
            2 days ago
          </div>
        </div>
      </div>

    </div>
  )
}
