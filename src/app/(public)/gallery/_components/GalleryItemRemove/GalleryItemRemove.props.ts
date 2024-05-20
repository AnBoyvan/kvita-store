import type { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';

import type { IPicture } from '@/interfaces';

export interface GalleryItemRemoveProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDialogElement>, HTMLDialogElement> {
	removePicture: IPicture | null;
	setRemovePicture: Dispatch<SetStateAction<IPicture | null>>;
}
