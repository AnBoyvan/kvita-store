'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

import styles from './PictureCompose.module.scss';
import type { PictureComposeProps } from './PictureCompose.props';
import { PictureComposeImage } from './components';

import { CustomImage, Htag, Spinner } from '@/components/Shared';
import { Button, Input } from '@/components/UI';
import { useMutatePictures } from '@/hooks';
import type { IPictureCreate, IPictureUpdate } from '@/interfaces';
import { createPictureSchema, updatePictureSchema } from '@/utils/validation';

export const PictureCompose: React.FC<PictureComposeProps> = ({
	picture,
	isNew,
	tags,
	onClose,
}) => {
	const { create, creating, update, updating } = useMutatePictures();

	const [showSpinner, setShowSpinner] = useState<boolean>(false);

	const defaultValues = {
		image: null,
		title: picture?.title || '',
		description: picture?.description || '',
		tags: picture?.tags || [],
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

	const changeTags = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		if (watch('tags')?.includes(value)) {
			setValue(
				'tags',
				watch('tags')?.filter(tag => tag !== value),
			);
		} else {
			const checked = watch('tags') || [];

			setValue('tags', [...checked, value]);
		}
	};

	const onSubmit: SubmitHandler<IPictureCreate | IPictureUpdate> = async data => {
		if (isNew) {
			create(data as IPictureCreate);
		}
		if (!isNew && picture) {
			update({
				id: picture._id,
				data: {
					...picture,
					title: data.title,
					description: data.description,
					tags: data.tags,
				},
			});
		}

		reject();
	};

	const reject = () => {
		reset();
		if (onClose) onClose();
	};

	useEffect(() => {
		setShowSpinner(isNew ? creating : updating);
	}, [creating, updating]);

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Htag tag="h2">{isNew ? 'Нове фото' : 'Редагування'}</Htag>
			<div className={styles.wrapper}>
				{picture ? (
					<div className={styles.image}>
						<CustomImage src={picture.imageURL} square alt="image" />
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
			<ul className={styles.tags}>
				{tags &&
					tags?.map((tag, index) => (
						<li key={index} className={styles.item}>
							<input
								id={tag}
								value={tag}
								checked={watch('tags')?.includes(tag)}
								type="checkbox"
								className={styles.input}
								onChange={changeTags}
							/>
							<label
								htmlFor={tag}
								className={clsx(styles.label, watch('tags')?.includes(tag) ? styles.checked : '')}
							>
								{tag}
							</label>
						</li>
					))}
			</ul>
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
