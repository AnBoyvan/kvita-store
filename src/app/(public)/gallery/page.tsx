import { Suspense } from 'react';

import { Gallery } from './_components';

import { Htag, Spinner } from '@/components/Shared';

export default function GalleryPage() {
	return (
		<Suspense fallback={<Spinner />}>
			<Htag tag="h1">Галерея</Htag>
			<Gallery />
		</Suspense>
	);
}
