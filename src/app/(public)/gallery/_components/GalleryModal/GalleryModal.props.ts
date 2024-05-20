import { Dispatch, SetStateAction } from 'react';

import type { IPicture } from '@/interfaces';

export interface GalleryModalProps {
	current: number | null;
	pictures?: IPicture[];
	setCurrent: Dispatch<SetStateAction<number | null>>;
}
