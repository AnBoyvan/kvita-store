'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './UsersTableModal.module.scss';
import type { UsersTableModalProps } from './UsersTableModal.props';

import { Htag, Spinner } from '@/components/Shared';
import { Button, Input, Select } from '@/components/UI';
import { ROLES } from '@/configs';
import { useMutateUsers } from '@/hooks';
import type { IUserUpdateByAdmin } from '@/interfaces';
import { formatDate } from '@/utils/helpers';
import { updByAdminSchema } from '@/utils/validation';

export const UsersTableModal: React.FC<UsersTableModalProps> = ({ user, action, ...props }) => {
	const [showSpinner, setShowSpinner] = useState<boolean>(false);

	const { updateByAdmin, updateByAdminSuccess, updatingByAdmin, updateByAdminError } =
		useMutateUsers();

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm<IUserUpdateByAdmin>({
		mode: 'all',
		defaultValues: {
			role: user.role,
			discount: user.discount,
		},
		resolver: yupResolver(updByAdminSchema),
	});

	const onSubmit: SubmitHandler<IUserUpdateByAdmin> = async data => {
		updateByAdmin({ id: user._id, data });
	};

	const reject = () => {
		reset();
		action();
	};

	useEffect(() => {
		if (updateByAdminSuccess || updateByAdminError) {
			reject();
		}
	}, [updateByAdminSuccess, updateByAdminError]);

	useEffect(() => {
		setShowSpinner(updatingByAdmin);
	}, [updatingByAdmin]);

	return (
		<div className={styles.modal} {...props}>
			<Htag tag="h3">{user.name}</Htag>
			<div>
				Телефон:&nbsp;<b>{user.phone}</b>
			</div>
			<div>
				Пошта:&nbsp;<b>{user.email}</b>
			</div>
			<div>
				Реєстрація:&nbsp;<b>{formatDate(user.createdAt)}</b>
			</div>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.wrapper}>
					<Select
						label="Статус"
						options={ROLES}
						{...register('role')}
						error={errors.role}
						value={watch('role')}
					/>
					<Input
						label="Знижка - %"
						{...register('discount')}
						type="number"
						error={errors.discount}
						value={watch('discount')}
						min={0}
					/>
				</div>
				<div className={styles.buttons}>
					<Button type="submit" mode="default" variant="primary">
						Готово
					</Button>
					<Button type="button" mode="default" variant="ghost" onClick={reject}>
						Відміна
					</Button>
				</div>
				{showSpinner && (
					<div className={styles.spinner}>
						<Spinner />
					</div>
				)}
			</form>
		</div>
	);
};
