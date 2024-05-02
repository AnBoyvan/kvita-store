'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './PictureCompose.module.scss';
import type { PictureComposeProps } from './PictureCompose.props';
import { PictureComposeImage } from './components';

import { CustomImage, Spinner, TagsCheckbox } from '@/components/Shared';
import { Button, Input } from '@/components/UI';
import { useMutatePictures } from '@/hooks/useMutatePictures';
import type { IPictureCreate, IPictureUpdate, Tags } from '@/interfaces';
import { createPictureSchema, updatePictureSchema } from '@/utils/validation';

export const PictureCompose: React.FC<PictureComposeProps> = ({
	picture,
	isNew,
	tags,
	onClose,
	...props
}) => {
	const { create, creating, update, updating } = useMutatePictures();

	const [showSpinner, setShowSpinner] = useState<boolean>(false);
	const [checkedTags, setCheckedTags] = useState<Tags>(picture?.tags || []);

	const defaultValues = {
		image: null,
		title: picture?.title || '',
		description: picture?.description || '',
		tags: checkedTags,
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
		reset,
		resetField,
	} = useForm<IPictureCreate | IPictureUpdate>({
		mode: 'all',
		reValidateMode: 'onSubmit',
		defaultValues: defaultValues,
		resolver: yupResolver(isNew ? createPictureSchema : updatePictureSchema),
	});

	const onSubmit: SubmitHandler<IPictureCreate | IPictureUpdate> = async data => {
		if (isNew) {
			await create(data as IPictureCreate);
		}
		if (!isNew && picture) {
			await update({
				id: picture._id,
				data: {
					...picture,
					title: data.title,
					description: data.description,
					tags: data.tags,
				},
			});
		}
	};

	const reject = () => {
		reset();
		if (onClose) onClose();
	};

	useEffect(() => {
		setShowSpinner(isNew ? creating : updating);
	}, [creating, updating]);

	useEffect(() => {
		setValue('tags', checkedTags);
	}, [checkedTags]);

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.wrapper}>
				{picture ? (
					<div className={styles.image}>
						<CustomImage src={picture.imageURL} square alt="image" style={{ zIndex: '-1' }} />
					</div>
				) : (
					<PictureComposeImage
						inputRef={register('image').ref}
						setValue={setValue}
						reset={() => {
							resetField('image');
						}}
					/>
				)}
				<div className={styles.inputs}>
					<Input
						label="Назва"
						{...register('title')}
						type="text"
						error={errors.title}
						value={watch('title')}
					/>
					<div className={styles.descrWrapper}>
						<span className={styles.descrTitle}>Опис</span>
						<textarea
							{...register('description')}
							value={watch('description')}
							rows={5}
							className={styles.descr}
						/>
					</div>
				</div>
			</div>
			<TagsCheckbox
				tags={tags}
				checkedTags={watch('tags') || []}
				setCheckedTags={setCheckedTags}
				className={styles.tags}
			/>
			<div className={styles.buttons}>
				<Button disabled={showSpinner} type="submit" mode="default" variant="primary">
					Готово
				</Button>
				<Button
					disabled={showSpinner}
					type="button"
					mode="default"
					variant="ghost"
					onClick={reject}
				>
					Відміна
				</Button>
			</div>
			{showSpinner && (
				<div className={styles.spinner}>
					<Spinner />
				</div>
			)}
		</form>
	);
};
