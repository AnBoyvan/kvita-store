import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { IPicture, Tags } from '@/interfaces';

export interface GalleryEditProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	picture: IPicture | null;
	setCompose: () => void;
	tags?: Tags;
}
