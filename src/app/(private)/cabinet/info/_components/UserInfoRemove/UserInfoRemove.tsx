'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './UserInfoRemove.module.scss';

import { Modal } from '@/components/Features';
import { Htag, Spinner } from '@/components/Shared';
import { Button, Input } from '@/components/UI';
import { useModal, useMutateUsers } from '@/hooks';
import { removeAccountSchema } from '@/utils/validation';

export const UserInfoRemove: React.FC = () => {
	const { modalRef, openModal, closeModal } = useModal();
	const { removeAccount, removeAccountSuccess, removingAccount, removeAccountError } =
		useMutateUsers();

	const [showSpinner, setShowSpinner] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm<{ password: string }>({
		mode: 'onChange',
		defaultValues: {
			password: '',
		},
		resolver: yupResolver(removeAccountSchema),
	});

	const onSubmit: SubmitHandler<{ password: string }> = ({ password }) => {
		removeAccount({ password });
	};

	const reject = () => {
		reset();
		closeModal();
	};

	useEffect(() => {
		if (removeAccountError) {
			reject();
		}
		if (removeAccountSuccess) {
			reject();
		}
	}, [removeAccountSuccess, removeAccountError]);

	useEffect(() => {
		setShowSpinner(removingAccount);
	}, [removingAccount]);

	return (
		<>
			<Button mode="link" className={styles.button} onClick={openModal}>
				Видалити акаунт
			</Button>

			<Modal ref={modalRef} container>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Htag tag="h3">Для підтвердження видалення акаунта введіть пароль.</Htag>
					<Input
						label="Пароль"
						{...register('password')}
						type="password"
						error={errors.password}
						value={watch('password')}
						icon="LockKeyhole"
					/>

					<div className={styles.buttons}>
						<Button
							disabled={showSpinner}
							type="button"
							mode="default"
							variant="ghost"
							onClick={reject}
						>
							Відміна
						</Button>
						<Button disabled={showSpinner} type="submit" mode="default" variant="primary">
							Видалити
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
