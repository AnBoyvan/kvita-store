'use client';

import { ProductsTable, ProductsTableFilter } from './_components';

import { productsData } from '@/data/products';

export default function ProductsDashboardPage() {
	return (
		<div>
			<ProductsTableFilter />
			<ProductsTable products={productsData.result} />
		</div>
	);
}
