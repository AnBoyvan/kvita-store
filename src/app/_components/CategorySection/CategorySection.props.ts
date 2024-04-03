import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { IProduct } from '@/interfaces/product.interface';

export interface CategorySectionProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	title: string;
	products: IProduct[];
	category: string;
}
