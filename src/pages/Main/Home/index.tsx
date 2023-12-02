import { FC } from 'react';
import MainBanner from './MainBanner';
import Features from './Features';
import { MainServices } from './MainServices';
import { Recomended } from './Recomanded';
import { Popular } from './Popular';
import { SpecialOffers } from './SpecialOffers';
import { Testimonials } from './Testimonials';
import { BookSale } from './BookSale';
import { LatestNews } from './LatestNews';
import { NewsLetter } from './NewsLetter';
import { FlashSale } from './FlashSale';
import { CartProvider } from "react-use-cart";
import { FeaturedBooks } from './FeaturedBooks';
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
							width: "80%",
							color: "var(--DarkPurple, #11142D)",
							textAlign: "center",
							fontFamily: "Open Sans",
							fontSize: "16px",
							fontStyle: "normal",
							fontWeight: 400,
							lineHeight: "normal",
							margin: 'auto'
						}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

					</div>
				</div>
				<CartProvider>
				<SpecialOffers />	
				</CartProvider>
				
			</div>
			<FlashSale/>
			<BookSale id={0} title={''} price={0} category={''} description={''} image={''} rating={{
				rate: 0,
				count: 0
			}} />
			<FeaturedBooks />
			<Testimonials/>
			<LatestNews />
			<NewsLetter />

			






		</>
	)
};
