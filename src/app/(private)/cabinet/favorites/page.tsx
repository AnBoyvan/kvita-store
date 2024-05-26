import { Metadata } from 'next';

import { FavoritesList } from './_components';

import { Htag } from '@/components/Shared';

export const metadata: Metadata = {
	title: 'Улюблені',
	robots: { index: false, follow: false },
};

export default function FavoritesPage() {
	return (
		<>
			<Htag tag="h1">Улюблені</Htag>
			<FavoritesList />
		</>
	);
}
