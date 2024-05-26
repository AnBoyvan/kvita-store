import { MetadataRoute } from 'next';

import { ROUTES_PUBLIC } from '@/configs';
import { productService } from '@/services/kvita-api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const data = await productService.find();
	const products = data?.result ? data.result : [];

	const productsEntries: MetadataRoute.Sitemap = products.map(({ _id, updatedAt }) => ({
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${_id}`,
		lastModified: new Date(updatedAt),
		changeFrequency: 'daily',
	}));

	const pagesEntries: MetadataRoute.Sitemap = ROUTES_PUBLIC.map(({ href }) => ({
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/${href}`,
		lastModified: new Date(),
		changeFrequency: 'weekly',
	}));

	return [...pagesEntries, ...productsEntries];
}
