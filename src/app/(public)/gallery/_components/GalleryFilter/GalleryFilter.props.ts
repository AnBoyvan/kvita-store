import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { Tags } from '@/interfaces';

export interface GalleryFilterProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	tags?: Tags;
}
