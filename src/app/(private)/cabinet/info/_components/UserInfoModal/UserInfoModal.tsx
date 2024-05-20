'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './UserInfoModal.module.scss';
import type { UserInfoModalProps } from './UserInfoModal.props';

import { Modal } from '@/components/Features';
import { Icon, Spinner } from '@/components/Shared';
import { Button, Input } from '@/components/UI';
import { useModal, useMutateUsers } from '@/hooks';
import type { IUserUpdate } from '@/interfaces';
import { updByUserSchema } from '@/utils/validation';

export const UserInfoModal: React.FC<UserInfoModalProps> = ({ user }) => {
	const { name, email, phone } = user;
	const { modalRef, openModal, closeModal } = useModal();
	const { updateByUser, updateByUserSuccess, updatingByUser, updateByUserError } = useMutateUsers();

	const [showSpinner, setShowSpinner] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm<IUserUpdate>({
		mode: 'onChange',
		defaultValues: {
			name: name || '',
			phone: phone || '',
			email: email || '',
		},
		resolver: yupResolver(updByUserSchema),
	});

	const onSubmit: SubmitHandler<IUserUpdate> = data => {
		updateByUser(data);
	};

	const reject = () => {
		reset();
		closeModal();
	};

	useEffect(() => {
		if (updateByUserSuccess || updateByUserError) {
			reject();
		}
	}, [updateByUserSuccess, updateByUserError]);

	useEffect(() => {
		setShowSpinner(updatingByUser);
	}, [updatingByUser]);

	return (
		<>
			<Button mode="default" variant="primary" className={styles.button} onClick={openModal}>
				<span>Змінити</span>
				<Icon name="PencilLine" />
			</Button>

			<Modal ref={modalRef} container>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Input
						label="Ім’я"
						{...register('name')}
						type="text"
						error={errors.name}
						value={watch('name')}
						icon="User"
					/>
					<Input
						label="Пошта"
						{...register('email')}
						type="text"
						error={errors.email}
						value={watch('email')}
						icon="Mail"
					/>
					<Input
						label="Телефон"
						{...register('phone')}
						type="text"
						error={errors.phone}
						value={watch('phone')}
						icon="Smartphone"
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
			</Modal>
		</>
	);
};
