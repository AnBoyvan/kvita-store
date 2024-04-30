'use client';

import { ProductsTable } from './_components';

import { Htag } from '@/components/Shared';

export default function ProductsDashboardPage() {
	return (
		<div>
			<Htag tag="h1">Продукція</Htag>
			<ProductsTable />
		</div>
	);
}
