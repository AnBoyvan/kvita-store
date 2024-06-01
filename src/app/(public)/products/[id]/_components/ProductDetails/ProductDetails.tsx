'use client';

import clsx from 'clsx';
import { useState } from 'react';

import styles from './ProductDetails.module.scss';
import type { ProductDetailsProps } from './ProductDetails.props';

import { Amount, Badge } from '@/components/Shared';
import { CartButton, Counter } from '@/components/UI';

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, ...props }) => {
	const { promoPrice, promo, price, isActive } = product;
	const [count, setCount] = useState<number>(1);

	const productPrice = promoPrice && promoPrice > 0 ? promoPrice : price;
	const productSum = productPrice * count;

	return (
		<div className={styles.details} {...props}>
			<div className={styles.priceWrapper}>
				<Amount title="Ціна" bordered className={styles.priceAmount}>
					<span className={clsx(styles.price, promo && styles.promoPrice)}>
						{productPrice}&nbsp;грн
					</span>
				</Amount>
				{Boolean(promo) && <Badge variant="promo" value={promo} className={styles.promo} />}
			</div>

			<div className={styles.action}>
				<div className={styles.summary}>
					<Counter count={count} setCount={setCount} />
					<Amount>
						<span className={styles.sum}>{productSum}&nbsp;грн</span>
					</Amount>
				</div>
				<CartButton
					mode="default"
					variant="primary"
					product={product}
					quantity={count}
					disabled={isActive ? false : true}
					className={styles.cartButton}
				/>
			</div>
		</div>
	);
};
