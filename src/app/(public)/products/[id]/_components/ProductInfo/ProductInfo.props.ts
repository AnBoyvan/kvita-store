import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductInfoProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	_id: string;
	name: string;
	description?: string;
}
