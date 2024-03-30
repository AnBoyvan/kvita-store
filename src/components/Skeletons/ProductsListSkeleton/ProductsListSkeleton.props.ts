import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ProductsListSkeletonProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	count: number;
}
