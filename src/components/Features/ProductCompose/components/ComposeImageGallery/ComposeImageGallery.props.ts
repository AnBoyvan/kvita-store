import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { UseFormSetValue } from 'react-hook-form';

import { IProductCreate, IProductUpdate } from '@/interfaces';

export interface ComposeImageGalleryProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	setValue: UseFormSetValue<IProductCreate | IProductUpdate>;
	image?: File;
	gallery?: File[];
	imageURL?: string;
	imageGallery?: string[];
}
