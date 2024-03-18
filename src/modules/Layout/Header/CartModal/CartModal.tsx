import { useCartStore } from '@/store/cart.store';
import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';
import styles from './CartModal.module.scss';
import { CloseModalButton } from '@/components/Modal/CloseModalButton/CloseModalButton';
import { Cart } from './Cart/Cart';
import { OrderForm } from './OrderForm/OrderForm';

export interface ICartSum {
	sum: number;
	discount: number;
	total: number;
}

export const CartModal: React.FC = () => {
	const { cart } = useCartStore();
	const { user } = useAuth();

	const [ordering, setOrdering] = useState<boolean>(false);
	const [orderSum, setOrderSum] = useState<ICartSum>({
		sum: 0,
		discount: 0,
		total: 0,
	});

	const itemsWithPromo = cart.filter(item => item.promo && item?.promo > 0);
	const itemsWithoutPromo = cart.filter(item => item?.promo === 0);
	const sumWithPromo = itemsWithPromo.reduce((total, item) => total + item.sum, 0);
	const sumWithoutPromo = itemsWithoutPromo.reduce((total, item) => total + item.sum, 0);
	const discount = user && user?.discount > 0 ? (sumWithoutPromo / 100) * user.discount : 0;

	useEffect(() => {
		setOrderSum({
			sum: sumWithPromo + sumWithoutPromo,
			discount,
			total: sumWithPromo + sumWithoutPromo - discount,
		});
	}, [cart]);

	return (
		<div className={styles.cartModal}>
			<CloseModalButton />
			{!ordering ? (
				<Cart
					cart={cart}
					orderSum={orderSum}
					userDiscount={user?.discount || 0}
					setOrdering={setOrdering}
				/>
			) : (
				<OrderForm cart={cart} total={orderSum.total} discountSum={orderSum.discount} />
			)}
		</div>
	);
};
