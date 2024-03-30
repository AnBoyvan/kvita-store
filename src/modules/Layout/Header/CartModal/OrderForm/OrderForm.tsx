import { OrderFormProps } from './OrderFormProps';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createOrdeSchema } from '@/utils/validation/orderSchemas';
import { IOrderCreateForm } from '@/interfaces/order.interface';
import { Input } from '@/ui/Input/Input';
import styles from './OrderForm.module.scss';
import { Checkbox } from '@/ui/Checkbox/Checkbox';
import Htag from '@/components/Htag/Htag';
import { Button } from '@/ui/Button/Button';
import { orderService } from '@/services/order.service';
import { toast } from 'sonner';
import { useContext } from 'react';
import { ModalContext } from '@/hooks/useModal';
import { useCart } from '@/hooks/useCart';
import { useUserStore } from '@/store/user.store';

export const OrderForm: React.FC<OrderFormProps> = ({ cart, total, discountSum }) => {
	const { user } = useUserStore();
	const { closeModal } = useContext(ModalContext);
	const { clearCart } = useCart();

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
		try {
			const result = await orderService.create(newOrder);
			if (result) toast.success('Замовлення відправлено', { closeButton: false });
			await clearCart();
			reset();
			closeModal();
		} catch (error) {
			toast.error('Помилка пристворенні замовлення', { closeButton: false });
		}
	};

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
				<Button type="submit" mode="wide" variant="primary">
					Оформити
				</Button>
			</form>
		</>
	);
};
