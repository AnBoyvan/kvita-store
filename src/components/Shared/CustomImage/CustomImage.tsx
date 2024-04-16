import clsx from 'clsx';
import Image from 'next/image';

import styles from './CustomImage.module.scss';
import type { CustomImageProps } from './CustomImage.props';

export const CustomImage: React.FC<CustomImageProps> = ({
	sizes,
	className,
	style,
	quality,
	onClick,
	square,
	...props
}) => {
	const cardSizes =
		'(min-width: 1700px) 288px, (min-width: 1040px) 17.5vw, (min-width: 780px) calc(25vw - 30px), calc(50vw - 24px)';

	return (
		<div
			className={clsx(styles.wrapper, square && styles.square, className && className)}
			onClick={onClick}
		>
			<Image
				sizes={sizes ? sizes : cardSizes}
				fill
				style={{ objectFit: 'cover', borderRadius: 'inherit', ...style }}
				{...props}
			/>
		</div>
	);
};
