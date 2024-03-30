'use client';

import { Badge } from '@/ui/Badge/Badge';
import styles from './ProductCard.module.scss';
import { ProductCardProps } from './ProductCard.props';
import Link from 'next/link';
import clsx from 'clsx';
import { LikeButton } from '@/ui/LikeButton/LikeButton';
import { CustomImage } from '../CustomImage/CustomImage';
import { CartButton } from '@/ui/CartButton/CartButton';
import { Motion } from '../Motion/Motion';

export const ProductCard: React.FC<ProductCardProps> = ({
	product,
	order,
	motionProps,
	...props
}: ProductCardProps) => {
	const { _id, name, imageURL, price, promo, promoPrice, isNewProduct } = product;

	const animatioDelay = order ? order * 0.2 : 0;

	return (
		<Motion
			initial="hidden"
			animate="default"
			transition={{ delay: animatioDelay }}
			{...motionProps}
		>
			<li {...props} className={styles.card}>
				<Link href={`/products/${_id}`} className={styles.imageWrapper}>
					{isNewProduct && <Badge variant="novelty" />}
					{Boolean(promo) && <Badge variant="promo" value={promo} />}
					<CustomImage src={imageURL} alt={name} className={styles.image} />
				</Link>
				<div className={styles.info}>
					<Link href={`/products/${_id}`} className={styles.name}>
						{name}
					</Link>
					<div className={clsx(styles.price, promo && styles.promo)}>
						{promoPrice ? promoPrice : price}&nbsp;грн
					</div>
					<CartButton mode="wide" variant="primary" product={product} quantity={1} />
				</div>
				<LikeButton productId={_id} />
			</li>
		</Motion>
	);
};
