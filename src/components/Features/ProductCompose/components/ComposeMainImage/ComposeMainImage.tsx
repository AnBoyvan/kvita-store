'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import styles from './ComposeMainImage.module.scss';
import type { ComposeMainImageProps } from './ComposeMainImage.props';

import { CustomImage, Icon } from '@/components/Shared';
import { Button, ImageInput } from '@/components/UI';

export const ComposeMainImage: React.FC<ComposeMainImageProps> = ({
	image,
	imageURL,
	setValue,

	...props
}) => {
	const [mainImage, setMainImage] = useState<string>('');

	const handleSetImage = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0];
		if (!file) return;
		setValue('image', file);
		setMainImage(URL.createObjectURL(file));
	};

	const removeImage = () => {
		setValue('image', undefined);
		setMainImage('');
	};

	useEffect(() => {
		if (image) {
			setMainImage(URL.createObjectURL(image));
			return;
		}
		if (imageURL) {
			setMainImage(imageURL);
		}
	}, [image, imageURL]);

	return (
		<div className={styles.mainImage} {...props}>
			{mainImage ? (
				<>
					<CustomImage src={mainImage} square alt="image" style={{ zIndex: '-1' }} />
					<Button type="button" mode="link" onClick={removeImage} className={styles.remove}>
						<Icon name="X" size={32} />
					</Button>
				</>
			) : (
				<ImageInput name="image" onChange={handleSetImage} />
			)}
		</div>
	);
};
