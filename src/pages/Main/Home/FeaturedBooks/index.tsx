import { FeaturedBook } from "../../../../components/FeaturedBooksComponent/FeaturedBook";
import { FeturedBooksComponent } from "../../../../components/FeaturedBooksComponent/FeturedBooksComponent";
import React from 'react'

export const FeaturedBooks = () => {
  return (
   
<section className='w-full flex justify-center items-center flex-shrink-0  h-[851px] bg-[#f2f0fe '>
				<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pt-12 pb-12 '>
					<div className=''>
						<div className="text-[#11142d] font-['Cairo'] text-[3.125rem] font-bold leading-[normal]">Featured Books</div>
						<div className="font-[Sans'] w-80 text-[#11142d] font-['Open leading-[normal]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</div>

						<FeturedBooksComponent
							image='sdfsd'
							bookName='Battle Drive'
							title='Synopsis'
							writtenBy='Kevin Smiley'
							price={84.78} year={2019} oldPrice={90.00}
							tagName='SPORTS, DRAMA'
							description='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
						/>
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6'>
						<FeaturedBook/>
					</div>
				</div>
			</section>

  )
}
