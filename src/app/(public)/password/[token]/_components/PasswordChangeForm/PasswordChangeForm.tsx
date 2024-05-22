'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './PasswordChangeForm.module.scss';
import type { PasswordChangeFormProps } from './PasswordChangeForm.props';

import { Htag, Spinner } from '@/components/Shared';
import { Button, Input } from '@/components/UI';
import { userService } from '@/services/kvita-api';
import { errorCatch } from '@/utils/helpers';
import { changePasswordSchema } from '@/utils/validation';

export const PasswordChangeForm: React.FC<PasswordChangeFormProps> = ({ token }) => {
	const [showSpinner, setShowSpinner] = useState<boolean>(false);
	const [showMessage, setShowMessage] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm<{ newPassword: string; confirmNewPassword: string }>({
		mode: 'onChange',
		defaultValues: {
			newPassword: '',
			confirmNewPassword: '',
		},
		resolver: yupResolver(changePasswordSchema),
	});

	const onSubmit: SubmitHandler<{
		newPassword: string;
		confirmNewPassword: string;
	}> = async data => {
		await setShowSpinner(true);
		try {
			const { message } = await userService.changePassword(token, data.newPassword);
			setShowSpinner(false);
			setShowMessage(message);
		} catch (error) {
			setShowSpinner(false);
			setShowMessage(errorCatch(error));
		}
		reset();
	};

	return (
		<div className={styles.wrapper}>
			{showMessage ? (
				<Htag tag="h3">{showMessage}</Htag>
			) : (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Htag tag="h3">Вкажіть новий пароль</Htag>
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
					<Button disabled={showSpinner} type="submit" mode="wide" variant="primary">
						Змінити
					</Button>
					{showSpinner && (
						<div className={styles.spinner}>
							<Spinner />
						</div>
					)}
				</form>
			)}
		</div>
	);
};
