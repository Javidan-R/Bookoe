import { FC } from 'react';
import { Link } from 'react-router-dom';

interface QuickLinksProps {
	className: string;
}

interface QuickLinksRoute {
	label: string;
	url: string;
	id: string;
}

const QuickLinksRoutes: QuickLinksRoute[] = [
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

export const QuickLinks: FC<QuickLinksProps> = ({ className }) => {
	return (
		<nav className={className}>
			{QuickLinksRoutes.map((route) => (
				<Link key={route.id} to={route.url}>
					{route.label}
				</Link>
			))}
		</nav>
	);
};
