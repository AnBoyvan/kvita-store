'use client';

import { type ChangeEvent } from 'react';
import { toast } from 'sonner';

import styles from './ComposeImageGallery.module.scss';
import type { ComposeImageGalleryProps } from './ComposeImageGallery.props';

import { CustomImage, Icon } from '@/components/Shared';
import { Button, ImageInput } from '@/components/UI';

export const ComposeImageGallery: React.FC<ComposeImageGalleryProps> = ({
	setValue,
	gallery,
	imageURL,
	imageGallery,
	...props
}) => {
	const newImages = gallery?.map(file => (
		<div
			key={file.name}
			className={styles.item}
			onClick={() => {
				setValue('image', file);
			}}
		>
			<CustomImage
				key={file.name}
				src={URL.createObjectURL(file)}
				square
				alt="image"
				style={{ zIndex: '-1' }}
			/>
			<Button
				type="button"
				mode="link"
				onClick={e => {
					e.stopPropagation();
					removeGalleryImg(file);
				}}
				className={styles.remove}
			>
				<Icon name="X" size={24} />
			</Button>
		</div>
	));

	const productGallery = imageGallery?.map((img, index) => (
		<div key={index} className={styles.item} onClick={() => setValue('imageURL', img)}>
			<CustomImage src={img} square alt="image" style={{ zIndex: '-1' }} />
			<Button
				type="button"
				mode="link"
				onClick={e => {
					e.stopPropagation();
					removeImageUrl(img);
				}}
				className={styles.remove}
			>
				<Icon name="X" size={24} />
			</Button>
		</div>
	));

	const productImages = [...(productGallery || []), ...(newImages || [])];

	const handleAddImage = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files) {
			const fileArray = Array.from(files) as File[];
			const updGallery = gallery ? [...gallery, ...fileArray] : fileArray;
			setValue('gallery', updGallery);
		}
	};

	const removeGalleryImg = (img: File) => {
		const updGallery = gallery?.filter(i => i.name !== img.name);
		setValue('gallery', updGallery);
	};

	const removeImageUrl = (img: string) => {
		if (img === imageURL) {
			toast.error('Головне фото не може бути видалено з галереї');
			return;
		}
		const updGallery = imageGallery?.filter(i => i !== img);
		setValue('imageGallery', updGallery);
	};

	return (
		<div className={styles.wrapper} {...props}>
			{productImages}
			<div className={styles.item}>
				<ImageInput name="gallery" onChange={handleAddImage} multiple={true} />
			</div>
		</div>
	);
};
