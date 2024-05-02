'use client';

import { useEffect, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

import styles from './AddTag.module.scss';
import type { AddTagProps } from './AddTag.props';

import { Modal } from '@/components/Features';
import { Htag, Icon, Spinner } from '@/components/Shared';
import { Button, Input } from '@/components/UI';
import { useModal, useMutateTags } from '@/hooks';

export const AddTag: React.FC<AddTagProps> = ({ tags = [], ...props }) => {
	const { modalRef, openModal, closeModal } = useModal();
	const { addTag, isAdding, isAdded } = useMutateTags();

	const [showSpinner, setShowSpinner] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm({
		mode: 'all',
		defaultValues: { newTag: '' },
	});

	const onSubmit: SubmitHandler<{ newTag: string }> = async data => {
		const updTags = [...tags, data.newTag];

		await addTag({ tags: updTags });
	};

	const reject = () => {
		reset();
		closeModal();
	};

	useEffect(() => {
		if (isAdded) {
			reject();
		}
	}, [isAdded]);

	useEffect(() => {
		setShowSpinner(isAdding);
	}, [isAdding]);

	return (
		<div className={styles.wrapper} {...props}>
			<Button mode="default" variant="primary" type="button" onClick={openModal}>
				<span>Додати тег</span>
				<Icon name="Plus" />
			</Button>

			<Modal ref={modalRef} container onClose={reject}>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Htag tag="h2">Додати тег</Htag>
					<Input
						{...register('newTag', {
							required: 'Додайте тег',
							validate: value => !tags?.includes(value) || 'Такий тег вже додано',
						})}
						type="text"
						error={errors.newTag}
						value={watch('newTag')}
					/>
					<div className={styles.buttons}>
						<Button mode="default" variant="primary" type="submit" disabled={isAdding}>
							Додати
						</Button>
						<Button
							mode="default"
							variant="ghost"
							type="button"
							onClick={reject}
							disabled={isAdding}
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
			</Modal>
		</div>
	);
};
