import { Metadata } from 'next';

import { Gallery } from './_components';

import { Htag } from '@/components/Shared';

export const metadata: Metadata = {
	title: 'Галерея',
	openGraph: {
		title: 'Галерея',
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/gallery`,
	},
};

export default function GalleryPage() {
	return (
		<>
			<Htag tag="h1">Галерея</Htag>
			<Gallery />
		</>
	);
}
