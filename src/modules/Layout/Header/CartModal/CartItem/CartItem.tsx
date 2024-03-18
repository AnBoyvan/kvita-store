import { Divider } from '@/components/Divider/Divider';
import styles from './CartItem.module.scss';
import { CartItemProps } from './CartItemProps';
import Image from 'next/image';
import { Button } from '@/ui/Button/Button';
import { Icon } from '@/ui/Icon/Icon';
import Link from 'next/link';
import { PAGES } from '@/configs/pages-url.config';
import { useEffect, useState } from 'react';
import { useCart } from '@/hooks/useCart';

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
	const { updateCartItem, removeFromCart } = useCart();

	const { productId, productName, productImage, price, promoPrice, quantity, sum } = item;
	const [count, setCount] = useState<number>(quantity);

	const itemPrice = promoPrice && promoPrice > 0 ? promoPrice : price;
	const itemSum = itemPrice * count;

	const handleChangeQuantity = (value: number) => {
		setCount(count + value);
	};

	const handleRemoveItem = () => {
		removeFromCart(productId);
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (quantity !== count) {
				updateCartItem({ ...item, quantity: count, sum: itemSum });
			}
		}, 300);

		return () => clearTimeout(timeout);
	}, [count]);

	return (
		<li className={styles.item}>
			<div className={styles.itemWrapper}>
				<div className={styles.info}>
					<div className={styles.image}>
						<Image
							src={productImage}
							alt={productName}
							fill
							style={{
								objectFit: 'cover',
								borderRadius: 'inherit',
							}}
							sizes="(max-width: 70px)"
						/>
					</div>
					<Link href={`${PAGES.PRODUCTS}/${productId}`} className={styles.name}>
						{productName}
					</Link>
				</div>
				<div className={styles.wrapper}>
					<div className={styles.priceWrapper}>
						<div className={styles.price}>
							<span className={styles.priceTitle}>Ціна</span>
							<span>{itemPrice}&nbsp;грн</span>
						</div>
						<div className={styles.counter}>
							<Button
								mode="simple"
								disabled={Boolean(count < 2)}
								onClick={() => handleChangeQuantity(-1)}
							>
								<Icon name="Minus" />
							</Button>
							<span className={styles.sumTitle}>{count}</span>
							<Button mode="simple" onClick={() => handleChangeQuantity(1)}>
								<Icon name="Plus" />
							</Button>
						</div>
					</div>

					<div className={styles.sumWrapper}>
						<span className={styles.sum}>{itemSum}&nbsp;грн</span>
						<Button mode="simple" onClick={handleRemoveItem}>
							<Icon name="Trash2" />
						</Button>
					</div>
				</div>
			</div>
			<Divider />
		</li>
	);
};
