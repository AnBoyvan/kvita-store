import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './CartItem.module.scss';
import { CartItemProps } from './CartItemProps';

import { Amount, CustomImage } from '@/components';
import { PAGES } from '@/configs';
import { useCart } from '@/hooks/useCart';
import { Button, Counter, Icon } from '@/ui';

export const CartItem: React.FC<CartItemProps> = ({ item, ...props }) => {
	const { updateCartItem, removeFromCart } = useCart();

	const { productId, productName, productImage, price, promoPrice, quantity, sum } = item;
	const [count, setCount] = useState<number>(quantity);

	const itemPrice = promoPrice && promoPrice > 0 ? promoPrice : price;
	const itemSum = itemPrice * count;

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (quantity !== count) {
				updateCartItem({ ...item, quantity: count, sum: itemSum });
			}
		}, 300);

		return () => clearTimeout(timeout);
	}, [count]);

	const handleRemoveItem = () => {
		removeFromCart(productId);
	};

	return (
		<li className={styles.item} {...props}>
			<div className={styles.info}>
				<Link href={`${PAGES.PRODUCTS}/${productId}`} className={styles.image}>
					<CustomImage
						src={productImage}
						alt={productName}
						sizes="(max-width: 70px)"
						square
						className="rounded-10"
					/>
				</Link>
				<Link href={`${PAGES.PRODUCTS}/${productId}`} className={styles.name}>
					{productName}
				</Link>
			</div>

			<div className={styles.details}>
				<div className={styles.wrapper}>
					<Amount title="Ціна" bordered={true}>
						<span>{itemPrice}&nbsp;грн</span>
					</Amount>
					<Counter count={count} setCount={setCount} />
				</div>

				<div className={styles.wrapper}>
					<Amount>
						<span className={styles.sum}>{itemSum}&nbsp;грн</span>
					</Amount>
					<Button mode="simple" onClick={handleRemoveItem} className="text-error">
						<Icon name="Trash2" />
					</Button>
				</div>
			</div>
		</li>
	);
};
