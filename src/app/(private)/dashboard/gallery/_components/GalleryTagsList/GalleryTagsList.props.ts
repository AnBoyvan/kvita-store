import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { Tags } from '@/interfaces';

export interface GalleryTagsListProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	tags?: Tags;
}
