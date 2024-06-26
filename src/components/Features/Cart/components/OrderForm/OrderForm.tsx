'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

import styles from './OrderForm.module.scss';
import type { OrderFormProps } from './OrderFormProps';

import { Htag, Spinner } from '@/components/Shared';
import { Button, Checkbox, Input } from '@/components/UI';
import { useModal, useMutateOrders } from '@/hooks';
import type { IOrderCreateForm } from '@/interfaces';
import { useUserStore } from '@/store';
import { createOrdeSchema } from '@/utils/validation';

export const OrderForm: React.FC<OrderFormProps> = ({ onBack, cart, total, discountSum }) => {
	const { user } = useUserStore();
	const { closeModal } = useModal();
	const { create, createSuccess, creating, createError } = useMutateOrders();

	const [showSpinner, setShowSpinner] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm<IOrderCreateForm>({
		mode: 'all',
		defaultValues: {
			name: user?.name || '',
			email: user?.email || '',
			phone: user?.phone || '',
			isComment: false,
			comment: '',
			delivery: false,
			deliveryAddress: '',
		},
		resolver: yupResolver(createOrdeSchema),
	});

	const onSubmit: SubmitHandler<IOrderCreateForm> = async ({
		name,
		email,
		phone,
		comment,
		delivery,
		deliveryAddress,
	}) => {
		const newOrder = {
			items: cart,
			discount: user?.discount || 0,
			discountSum,
			total,
			customer: {
				id: user?._id || '',
				name,
				phone,
				email,
			},
			comment,
			delivery: Boolean(delivery),
			deliveryAddress,
		};

		create(newOrder);
	};

	const reject = () => {
		reset();
		closeModal();
	};

	useEffect(() => {
		if (createSuccess || createError) {
			reject();
		}
	}, [createSuccess, createError]);

	useEffect(() => {
		setShowSpinner(creating);
	}, [creating]);

	return (
		<>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Htag tag="h2" className={styles.title}>
					Оформлення замовлення
				</Htag>
				<div className={styles.contacts}>
					<Htag tag="h3" className={styles.contactsTitle}>
						Контактні дані
					</Htag>
					<div className={styles.contactFields}>
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
					</div>
				</div>
				<div className={styles.wrapper}>
					<Checkbox {...register('delivery')} variant="rect">
						Доставка
					</Checkbox>
					{Boolean(watch('delivery')) && (
						<Input
							{...register('deliveryAddress')}
							type="text"
							error={errors.deliveryAddress}
							value={watch('deliveryAddress')}
							placeholder="Вкажіть адресу доставки"
						/>
					)}
				</div>
				<div className={styles.wrapper}>
					<Checkbox {...register('isComment')} variant="rect">
						Коментар
					</Checkbox>
					{Boolean(watch('isComment')) && (
						<textarea
							{...register('comment')}
							value={watch('comment')}
							rows={5}
							placeholder="Коментар..."
							className={styles.comment}
						/>
					)}
				</div>
				<div className={styles.buttons}>
					<Button mode="wide" variant="ghost" onClick={() => onBack(false)} className={styles.btn}>
						Назад
					</Button>
					<Button type="submit" mode="wide" variant="primary" className={styles.btn}>
						Оформити
					</Button>
				</div>
				{showSpinner && (
					<div className={styles.spinner}>
						<Spinner />
					</div>
				)}
			</form>
		</>
	);
};
