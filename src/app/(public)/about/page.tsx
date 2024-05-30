import { Metadata } from 'next';

import { About, AboutContacts } from './_components';

import { Htag } from '@/components/Shared';

export const metadata: Metadata = {
	title: 'Про нас',
	openGraph: {
		title: 'Про нас',
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
	},
};

export default function AboutPage() {
	return (
		<>
			<Htag tag="h1">Про нас</Htag>
			<About />
			<AboutContacts />
		</>
	);
}
