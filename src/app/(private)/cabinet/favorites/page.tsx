import { FavoritesList } from './_components';

import { Htag } from '@/components/Shared';

export default function FavoritesPage() {
	return (
		<>
			<Htag tag="h1">Улюблені</Htag>
			<FavoritesList />
		</>
	);
}
