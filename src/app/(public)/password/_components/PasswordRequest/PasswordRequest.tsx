'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './PasswordRequest.module.scss';

import { Htag, Spinner } from '@/components/Shared';
import { Button, Input } from '@/components/UI';
import { userService } from '@/services/kvita-api';
import { errorCatch } from '@/utils/helpers';
import { passwordRequestSchema } from '@/utils/validation';

export const PasswordRequest: React.FC = () => {
	const [showSpinner, setShowSpinner] = useState<boolean>(false);
	const [showMessage, setShowMessage] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm<{ email: string }>({
		mode: 'onChange',
		defaultValues: {
			email: '',
		},
		resolver: yupResolver(passwordRequestSchema),
	});

	const onSubmit: SubmitHandler<{ email: string }> = async ({ email }: { email: string }) => {
		await setShowSpinner(true);
		try {
			const { message } = await userService.changePasswordRequest(email);
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
					<Htag tag="h3">
						Введіть адресу електронної пошти, пов’язану з Вашим профілем, щоб змінити пароль.
					</Htag>
					<Input
						label="Пошта"
						{...register('email')}
						type="text"
						error={errors.email}
						value={watch('email')}
						icon="Mail"
					/>
					<Button disabled={showSpinner} type="submit" mode="wide" variant="primary">
						Надіслати
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
