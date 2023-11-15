import React from 'react'
import { FlashCard } from '../../../../components/FlashCardComponent'

export const FlashSale = () => {
  return (
    <section>
				{/* FLASH SALE */}
				<div className='flex justify-center mt-8	'>
					<div>
						<div className="text-[#11142d] text-center font-['Cairo'] text-[3.125rem] font-bold leading-[normal]">Flash Sale</div>
						<div className="Sans'] flex-shrink-0 w-80 h-16 text-[#11142d] text-center font-['Open leading-[normal]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
						<div className="flex-shrink-0 w-80 h-[7.5rem] rounded-[0.875rem] border border-[#f0eeff] bg-white" >
							DAYS
						</div>
					</div>

				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pt-12'>
					<FlashCard />

				</div>

			</section>
  )
}
