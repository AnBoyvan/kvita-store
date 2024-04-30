import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { UseFormSetValue } from 'react-hook-form';

import { IProductCreate, IProductUpdate } from '@/interfaces';

export interface ComposeMainImageProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	setValue: UseFormSetValue<IProductCreate | IProductUpdate>;
	image?: File;
	imageURL?: string;
}
