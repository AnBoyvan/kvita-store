import { Suspense } from 'react';

import { FavoritesList } from './_components';

import { Htag, Spinner } from '@/components/Shared';

export default function FavoritesPage() {
	return (
		<Suspense fallback={<Spinner />}>
			<Htag tag="h1">Улюблені</Htag>
			<FavoritesList />
		</Suspense>
	);
}
