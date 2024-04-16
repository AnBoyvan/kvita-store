import { Suspense } from 'react';

import { ProductsList, ProductsPageFilter } from './_components';

import { Htag, Spinner } from '@/components/Shared';

export default async function ProductsPage({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const limit = 20;
	const page = searchParams?.page || '1';
	const queryString = searchParams
		? `${new URLSearchParams(searchParams as Record<string, string>).toString()}&isActive=true&limit=${limit}`
		: `isActive=true&limit=${limit}`;

	return (
		<>
			<Htag tag="h1">Наша продукція</Htag>
			<Suspense fallback={<Spinner />}>
				<ProductsPageFilter />
				<ProductsList query={queryString} page={page} limit={limit} />
			</Suspense>
		</>
	);
}
