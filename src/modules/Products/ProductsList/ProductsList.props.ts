import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductsListProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	query: string;
	page: string | string[];
	limit: number;
}
