import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { IProduct } from '@/interfaces';

export interface ProductsTableProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	products: IProduct[];
}
