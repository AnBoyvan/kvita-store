import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { IPicture, Tags } from '@/interfaces';

export interface PictureComposeProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
	picture?: IPicture;
	isNew: boolean;
	tags?: Tags;
	onClose?: () => void;
}
