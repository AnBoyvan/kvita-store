import { Metadata } from 'next';

import { GalleryDashboard } from './_components';

import { Htag } from '@/components/Shared';

export const metadata: Metadata = {
	title: 'Галерея',
	robots: { index: false, follow: false },
};

export default async function GalleryDashboardPage() {
	return (
		<>
			<Htag tag="h1">Галерея</Htag>
			<GalleryDashboard />
		</>
	);
}
