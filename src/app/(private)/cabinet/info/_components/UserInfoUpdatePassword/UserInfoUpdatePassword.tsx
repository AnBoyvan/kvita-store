'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './UserInfoUpdatePassword.module.scss';

import { Modal } from '@/components/Features';
import { Spinner } from '@/components/Shared';
import { Button, Input } from '@/components/UI';
import { useModal, useMutateUsers } from '@/hooks';
import type { IUserUpdatePasswordForm } from '@/interfaces';
import { updPasswordSchema } from '@/utils/validation';

export const UserInfoUpdatePassword: React.FC = () => {
	const { modalRef, openModal, closeModal } = useModal();
	const { updatePassword, updatePasswordSuccess, updatingPassword, updatePasswordError } =
		useMutateUsers();

	const [showSpinner, setShowSpinner] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm<IUserUpdatePasswordForm>({
		mode: 'onChange',
		defaultValues: {
			password: '',
			newPassword: '',
			confirmNewPassword: '',
		},
		resolver: yupResolver(updPasswordSchema),
	});

	const onSubmit: SubmitHandler<IUserUpdatePasswordForm> = ({ confirmNewPassword, ...data }) => {
		updatePassword(data);
	};

	const reject = () => {
		reset();
		closeModal();
	};

	useEffect(() => {
		if (updatePasswordSuccess || updatePasswordError) {
			reject();
		}
	}, [updatePasswordSuccess, updatePasswordError]);

	useEffect(() => {
		setShowSpinner(updatingPassword);
	}, [updatingPassword]);

	return (
		<>
			<Button mode="link" className={styles.button} onClick={openModal}>
				Змінити пароль
			</Button>

			<Modal ref={modalRef} container>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Input
						label="Пароль"
						{...register('password')}
						type="password"
						error={errors.password}
						value={watch('password')}
						icon="LockKeyhole"
					/>
					<Input
						label="Новий пароль пароль"
						{...register('newPassword')}
						type="password"
						error={errors.newPassword}
						value={watch('newPassword')}
						icon="LockKeyhole"
					/>
					<Input
						label="Підтвердіть новий пароль"
						{...register('confirmNewPassword')}
						type="password"
						error={errors.confirmNewPassword}
						value={watch('confirmNewPassword')}
						icon="LockKeyhole"
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
