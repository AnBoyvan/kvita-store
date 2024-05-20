import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { Tags } from '@/interfaces';

export interface GalleryListProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	tags?: Tags;
}
