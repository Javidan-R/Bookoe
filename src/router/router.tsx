// router.tsx
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { Checkout, DetailDescription, DetailReview, Grid, Home, List } from '../pages';
import { MainLayout } from '../features/layout';
import { Role } from '../models';
import { ErrorBoundary, ProtectedRoute } from '../features';
import { AuthLayout } from '../features/layout/Auth';
import { Login } from '../pages/Auth';
import { AdminLayout } from '../features/layout/Admin';
import { Dashboard } from '../pages/Admin';



export const router = createBrowserRouter([
	{
		path: 'auth',
		element: (
			<ProtectedRoute expectedRole={null} redirectPath='/'>
				<AuthLayout />
			</ProtectedRoute>
		),
		children: [
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'register',
				element: <h1>Register</h1>,
			},

			{
				path: '*',
				element: <Navigate to='/auth/login' />,
			},
		],
	},
	{
		path: 'admin',
		element: (
			<ProtectedRoute expectedRole={Role.ADMIN} redirectPath='/'>
				<AdminLayout />
			</ProtectedRoute>
		),
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: 'dashboard',
				element: <Dashboard />,
			},
			{
				path: 'about',
				element: <AdminLayout />,
			},
		],
	},
	{
		path: '/',
		element: (
			<ProtectedRoute expectedRole={Role.USER} redirectPath='/auth/login'>
				<MainLayout >

				</MainLayout>
			</ProtectedRoute>
		),
		errorElement: <h1>User Not Found</h1>,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/books-grid',
				element: <>alknlkasnd</>
			},
			{
				path: 'books-list',
				element: <List />
			},
			{
				path: 'book-detail-description',
				element: <DetailDescription />
			},
			{
				path: 'book-detail-review',
				element: <DetailReview />
			},
			{
				path: 'checkout',
				element: <Checkout />
			}


		],
	},
]);