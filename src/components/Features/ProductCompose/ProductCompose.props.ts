import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { IProduct } from '@/interfaces';

export interface ProductComposeProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
	product?: IProduct;
	isNew: boolean;
}
