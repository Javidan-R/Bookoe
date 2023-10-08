import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface BooksCategoriesProps {
	className: string;
}

interface FooterRoute {
	label: string;
	url: string;
	id: string;
}

const footerRoutes: FooterRoute[] = [
	{
		label: 'Action',
		url: '/action',
		id: 'action',
	},
	{
		label: 'Law',
		url: '/help',
		id: 'law',
	},
	{
		label: 'Advanture',
		url: '/advanture',
		id: 'advanture',
	},
	{
		label: 'Mystery',
		url: '/mystery',
		id: 'mystery',
	},
	{
		label: 'Comedy',
		url: '/comedy',
		id: 'comedy',
	},
	{
		label: 'Professional',
		url: '/professional',
		id: 'professional',
	},
	{
		label: 'Crime',
		url: '/crime',
		id: 'crime',
	},
	{
		label: 'Romance',
		url: '/romance',
		id: 'romance',
	},
];

export const BooksCategories: FC<BooksCategoriesProps> = ({ className }) => {
	return (
		<nav className={className}>
			{footerRoutes.map((route) => (
				<Link key={route.id} to={route.url}>
					{route.label}
				</Link>
			))}
		</nav>
	);
};
