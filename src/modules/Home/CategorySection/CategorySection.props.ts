import { IProduct } from '@/interfaces/product.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CategorySectionProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	title: string;
	products: IProduct[];
	category: string;
}
