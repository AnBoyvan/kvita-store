import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { IProduct } from '@/interfaces';

export interface ProductDetailsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: IProduct;
}
