import { Suspense } from 'react';

import { Gallery } from './_components';

import { Htag, Spinner } from '@/components/Shared';

export default function GalleryPage() {
	return (
		<>
			<Htag tag="h1">Галерея</Htag>
			<Suspense fallback={<Spinner />}>
				<Gallery />
			</Suspense>
		</>
	);
}
