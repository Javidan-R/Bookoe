import  { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logout from '../Auth/Logout';



export const AdminLayout = () => {
	const [authenticated] = useState<boolean>(true); // Initialize with the appropriate authentication status
	return (
		<>
			<header>
				<h1>this is admin layout</h1>
				
				<nav>
					<ul>
						<li>
							<Link to='/admin'>Home</Link>
						</li>
						<li>
							<Link to='/admin/about'>About</Link>
						</li>
						<li>
							<Link to='/admin/product'>Product</Link>
						</li>
					</ul>
					<div>
            {authenticated ? (
              <>
                <Logout /> {/* Include the Logout component */}
              </>
            ) : null}
          </div>

							

				</nav>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>&copy; {new Date().getFullYear()}</footer>
		</>
	);
};
