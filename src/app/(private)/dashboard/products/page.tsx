'use client';

import { Suspense } from 'react';

import { ProductsTable } from './_components';

import { Htag, Spinner } from '@/components/Shared';

export default function ProductsDashboardPage() {
	return (
		<Suspense fallback={<Spinner />}>
			<Htag tag="h1">Продукція</Htag>
			<ProductsTable />
		</Suspense>
	);
}
