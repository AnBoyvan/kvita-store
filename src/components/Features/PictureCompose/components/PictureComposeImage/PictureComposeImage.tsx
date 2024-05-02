'use client';

import { ChangeEvent, useState } from 'react';

import styles from './PictureComposeImage.module.scss';
import type { PictureComposeImageProps } from './PictureComposeImage.props';

import { CustomImage, Icon } from '@/components/Shared';
import { Button, ImageInput } from '@/components/UI';

export const PictureComposeImage: React.FC<PictureComposeImageProps> = ({
	setValue,
	reset,
	inputRef,
	...props
}) => {
	const [newImage, setNewImage] = useState<string>('');

	const handleSetImage = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0];
		if (!file) return;
		setValue('image', file);
		setNewImage(URL.createObjectURL(file));
	};

	const removeImage = () => {
		reset();
		setNewImage('');
	};

	return (
		<div className={styles.image} {...props}>
			{newImage ? (
				<>
					<CustomImage src={newImage} square alt="image" />
					<Button type="button" mode="link" onClick={removeImage} className={styles.remove}>
						<Icon name="X" size={32} />
					</Button>
				</>
			) : (
				<ImageInput ref={inputRef} name="image" onChange={handleSetImage} />
			)}
		</div>
	);
};
