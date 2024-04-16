import clsx from 'clsx';
import Link from 'next/link';

import styles from './ProductCard.module.scss';
import { ProductCardProps } from './ProductCard.props';

import { Motion } from '@/components/Features';
import { Badge, CustomImage } from '@/components/Shared';
import { CartButton, LikeButton } from '@/components/UI';

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
				<Link href={`/products/${_id}`} className={styles.image}>
					{isNewProduct && <Badge variant="novelty" />}
					{Boolean(promo) && <Badge variant="promo" value={promo} />}
					<CustomImage src={imageURL} alt={name} square style={{ zIndex: '-1' }} />
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
