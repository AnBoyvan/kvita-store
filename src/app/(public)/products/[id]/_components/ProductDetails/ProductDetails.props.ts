import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { IProduct } from '@/interfaces';

export interface ProductDetailsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: IProduct;
}
