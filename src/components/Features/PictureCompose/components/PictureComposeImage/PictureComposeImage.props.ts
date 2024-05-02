import type { DetailedHTMLProps, ForwardedRef, HTMLAttributes } from 'react';
import type { UseFormSetValue } from 'react-hook-form';

import type { IPictureCreate, IPictureUpdate } from '@/interfaces';

export interface PictureComposeImageProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	setValue: UseFormSetValue<IPictureCreate | IPictureUpdate>;
	reset: () => void;
	inputRef: ForwardedRef<HTMLInputElement>;
}
