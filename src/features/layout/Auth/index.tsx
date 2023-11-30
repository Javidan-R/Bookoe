import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
	return (
		<>
			<main className='p-4 container m-auto ' style={{overflow:'hidden'}}>
				<Outlet />
			</main>
			<footer className='p-4 container m-auto'>&copy; {new Date().getFullYear()}</footer>
		</>
	);
};
 