import { Metadata } from 'next';

import { ProductCompose } from '@/components/Features';
import { Htag } from '@/components/Shared';
import { fetchProduct } from '@/utils/helpers';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
	const product = await fetchProduct(params.id);

	if (!product) return {};

	return {
		title: `Редагування | ${product.name}`,
		robots: { index: false, follow: false },
	};
}

export default async function EditDashboardPage({ params }: { params: { id: string } }) {
	const product = await fetchProduct(params.id);

	return (
		<div>
			<Htag tag="h1">Редагування</Htag>
			{product && <ProductCompose isNew={false} product={product} />}
		</div>
	);
}
