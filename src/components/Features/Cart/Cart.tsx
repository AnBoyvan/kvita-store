'use client';

import { useEffect, useState } from 'react';

import styles from './Cart.module.scss';
import { CartDetails, CartItem, CartList, EmptyCart, OrderForm } from './components';

import { Htag } from '@/components/Shared';
import { ICartSum } from '@/interfaces';
import { useCartStore, useUserStore } from '@/store';

export const Cart: React.FC = () => {
	const { cart } = useCartStore();
	const { user } = useUserStore();

	const [ordering, setOrdering] = useState<boolean>(false);
	const [orderSum, setOrderSum] = useState<ICartSum>({
		sum: 0,
		discount: 0,
		total: 0,
	});

	useEffect(() => {
		const { sumWithPromo, sumWithoutPromo } = cart.reduce(
			(acc: { sumWithPromo: number; sumWithoutPromo: number }, item) => {
				if (item.promo && item.promo > 0) {
					acc.sumWithPromo += item.sum;
				} else {
					acc.sumWithoutPromo += item.sum;
				}
				return acc;
			},
			{ sumWithPromo: 0, sumWithoutPromo: 0 },
		);

		const discount =
			user?.discount && user?.discount > 0 ? (sumWithoutPromo / 100) * user.discount : 0;

		setOrderSum({
			sum: sumWithPromo + sumWithoutPromo,
			discount,
			total: sumWithPromo + sumWithoutPromo - discount,
		});
	}, [cart, user]);

	return (
		<div className={styles.cart}>
			{!ordering ? (
				<>
					<Htag tag="h2">Кошик</Htag>
					{cart.length > 0 ? (
						<>
							<CartList>
								{cart.map(item => (
									<CartItem key={item.productId} item={item} />
								))}
							</CartList>
							<CartDetails
								orderSum={orderSum}
								userDiscount={user.discount ? user.discount : 0}
								setOrdering={setOrdering}
							/>
						</>
					) : (
						<EmptyCart />
					)}
				</>
			) : (
				<>
					<OrderForm
						cart={cart}
						total={orderSum.total}
						discountSum={orderSum.discount}
						onBack={setOrdering}
					/>
				</>
			)}
		</div>
	);
};
