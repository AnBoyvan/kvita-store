import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { IMotionProps } from '@/components/Features/Motion/Motion.props';
import type { IPicture } from '@/interfaces';

export interface GalleryItemProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	picture: IPicture;
	order?: number;
	motionProps?: IMotionProps;
	setCompose: () => void;
	setRemovePicture: () => void;
	setCurrent: () => void;
}
