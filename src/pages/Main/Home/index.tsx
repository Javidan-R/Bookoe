import { FC } from 'react';
import MainBanner  from './MainBanner';
import Features from './Features';
import { MainServices } from './MainBanner/MainServices';
import { Recomended } from './MainBanner/Recomanded';
import { Popular } from './MainBanner/Popular';

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
								

				
		</>
	)
};
