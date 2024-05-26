'use client';

import { Metadata } from 'next';

import { ProductsTable } from './_components';

import { Htag } from '@/components/Shared';

export const metadata: Metadata = {
	title: 'Продукція',
	robots: { index: false, follow: false },
};

export default function ProductsDashboardPage() {
	return (
		<>
			<Htag tag="h1">Продукція</Htag>
			<ProductsTable />
		</>
	);
}
