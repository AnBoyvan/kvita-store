'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { OrdersTableModalDetails, OrdersTableModalList } from '..';

import styles from './OrdersTableModal.module.scss';
import type { OrdersTableModalProps } from './OrdersTableModal.props';

import { Htag, Spinner } from '@/components/Shared';
import { Button, Checkbox, Input, Select } from '@/components/UI';
import { STATUSES } from '@/configs';
import { useMutateOrders } from '@/hooks';
import { IOrderUpdate } from '@/interfaces';
import { formatDate } from '@/utils/helpers';
import { updateOrdeSchema } from '@/utils/validation';

export const OrdersTableModal: React.FC<OrdersTableModalProps> = ({ order, action }) => {
	const { update, updateSuccess, updating, updateError } = useMutateOrders();
	const [showSpinner, setShowSpinner] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm<IOrderUpdate>({
		mode: 'all',
		defaultValues: {
			status: order.status,
			delivery: order.delivery || false,
			deliveryAddress: order.deliveryAddress || '',
			annotation: order.annotation || '',
		},
		resolver: yupResolver(updateOrdeSchema),
	});

	const onSubmit: SubmitHandler<IOrderUpdate> = async data => {
		update({ id: order._id, data });
	};

	const reject = () => {
		reset();
		action();
	};

	useEffect(() => {
		if (updateSuccess || updateError) {
			reject();
		}
	}, [updateSuccess, updateError]);

	useEffect(() => {
		setShowSpinner(updating);
	}, [updating]);

	const sum = order.items.reduce((acc: number, item) => acc + item.sum, 0);

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Htag tag="h3">
				{order.publicId}&nbsp;від&nbsp;{formatDate(order.createdAt)}
			</Htag>
			<div className={styles.customer}>
				<Htag tag="h3">Замовник</Htag>
				<div>
					Ім’я:&nbsp;<b>{order.customer.name}</b>
				</div>
				<div>
					Телефон:&nbsp;<b>{order.customer.phone}</b>
				</div>
				<div>
					Пошта:&nbsp;<b>{order.customer.email}</b>
				</div>
				<div>
					Коментар:&nbsp;<b className={styles.comment}>{order.comment}</b>
				</div>
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
			<OrdersTableModalList items={order.items} />
			<OrdersTableModalDetails
				discount={order.discount}
				discountSum={order.discountSum}
				total={order.total}
				sum={sum}
			/>
			<Select
				label="Статус"
				options={STATUSES}
				{...register('status')}
				error={errors.status}
				value={watch('status')}
			/>
			<textarea
				{...register('annotation')}
				value={watch('annotation')}
				rows={5}
				placeholder={errors.annotation ? `${errors.annotation.message}` : 'Коментар...'}
				className={clsx(styles.annotation, errors.annotation && styles.error)}
			/>
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
	);
};
