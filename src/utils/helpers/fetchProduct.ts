import { cache } from 'react';

import { productService } from '@/services/kvita-api';

export const fetchProduct = cache(async (id: string) => {
	const product = await productService.findById(id);
	return product;
});
