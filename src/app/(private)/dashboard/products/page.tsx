'use client';

import { ProductsTable } from './_components';

import { productsData } from '@/data/products';

export default function ProductsDashboardPage() {
	return (
		<div>
			<ProductsTable products={productsData.result} />
		</div>
	);
}
