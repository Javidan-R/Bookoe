import { FC } from 'react';
import MainBanner from './MainBanner';
import Features from './Features';
import { MainServices } from './MainBanner/MainServices';
import { Recomended } from './MainBanner/Recomanded';
import { Popular } from './MainBanner/Popular';
import { SpecialOffers } from '../../../components/SpecialOffersComponent';
import { FlashCard } from '../../../components/FlashCardComponent';
import { FeaturedBooks } from './MainBanner/FeaturedBooks';
import { BooksComp } from '../../../components/BooksComp';

export const Home: FC = () => {
	return (
		<>
			<MainBanner />
			<Features />
			<MainServices />
			<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pt-12'>
				<Recomended />
				<Popular />
			</div>
			<div>
				<div className='flex justify-center pt-10 pb-4'>
					<div>
						<h3 className='flex justify-center m-4' style={{
							color: "var(--DarkPurple, #11142D)",
							textAlign: "center",
							fontFamily: "Cairo",
							fontSize: "50px",
							fontStyle: "normal",
							fontWeight: 700,
							lineHeight: "normal",
						}} >Special Offers</h3>
						<p style={{
							width: "650px",
							color: "var(--DarkPurple, #11142D)",
							textAlign: "center",
							fontFamily: "Open Sans",
							fontSize: "16px",
							fontStyle: "normal",
							fontWeight: 400,
							lineHeight: "normal",
						}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

					</div>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 pt-12'>
					<SpecialOffers />
					</div>
			</div>
			<section>
				{/* FLASH SALE */}
				<div className='flex justify-center mt-8	'>
					<div>
						<div className="text-[#11142d] text-center font-['Cairo'] text-[3.125rem] font-bold leading-[normal]">Flash Sale</div>
						<div className="Sans'] flex-shrink-0 w-[554px] h-16 text-[#11142d] text-center font-['Open leading-[normal]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
						<div className="flex-shrink-0 w-[505px] h-[7.5rem] rounded-[0.875rem] border border-[#f0eeff] bg-white" >
							DAYS
						</div>
					</div>

				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pt-12'>
					<FlashCard  />
					
				</div>

			</section>

			<section>
				{/* Featured Books */}
				<div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 pt-12 pb-12 mb-12'>
					<div>
						{/* Featured Book */}
						<div className="text-[#11142d] font-['Cairo'] text-[3.125rem] font-bold leading-[normal]">Featured Books</div>
						<div className="Sans'] w-[453px] text-[#11142d] font-['Open leading-[normal]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</div>

						<FeaturedBooks 
						image='sdfsd'
						bookName='Battle Drive'
						title='Synopsis'
						writtenBy='Kevin Smiley'
						 price={84.78} year={2019} oldPrice={90.00}
						tagName='SPORTS, DRAMA' 
						description='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
						/>
					</div>
					<div>
						<BooksComp />
					</div>
				</div>


			</section>





		</>
	)
};
