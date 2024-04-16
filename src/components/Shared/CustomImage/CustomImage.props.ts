import type { ImageProps } from 'next/image';

export interface CustomImageProps extends ImageProps {
	square?: boolean;
}
