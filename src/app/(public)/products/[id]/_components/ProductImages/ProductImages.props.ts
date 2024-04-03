import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductImagesProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	name: string;
	image: string;
	gallery: string[];
}
