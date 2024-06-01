'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import fallback from '../../../../public/images/fallback.png';

import styles from './CustomImage.module.scss';
import type { CustomImageProps } from './CustomImage.props';

export const CustomImage: React.FC<CustomImageProps> = ({
	src,
	sizes,
	className,
	style,
	quality,
	onClick,
	square,
	...props
}) => {
	const [imageError, setImageError] = useState(false);

	const cardSizes =
		'(min-width: 1700px) 288px, (min-width: 1040px) 17.5vw, (min-width: 780px) calc(25vw - 30px), calc(50vw - 24px)';

	return (
		<div
			className={clsx(styles.wrapper, square && styles.square, className && className)}
			onClick={onClick}
		>
			<Image
				src={imageError ? fallback : src}
				sizes={sizes ? sizes : cardSizes}
				fill
				style={{ objectFit: 'cover', borderRadius: 'inherit', ...style }}
				onError={() => setImageError(true)}
				{...props}
			/>
		</div>
	);
};
