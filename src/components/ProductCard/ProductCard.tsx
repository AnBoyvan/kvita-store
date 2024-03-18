import { Badge } from '@/ui/Badge/Badge';
import styles from './ProductCard.module.scss';
import { ProductCardProps } from './ProductCard.props';
import Link from 'next/link';
import clsx from 'clsx';
import { LikeButton } from '@/ui/LikeButton/LikeButton';
import { DynamicImage } from '../DynamicImage/DynamicImage';
import { CartButton } from '@/ui/CartButton/CartButton';

export const ProductCard: React.FC<ProductCardProps> = ({
	product,
	...props
}: ProductCardProps) => {
	const { _id, name, imageURL, price, promo, promoPrice, favorite, isNewProduct } = product;

	return (
		<li {...props} className={styles.card}>
			<Link href={`/products/${_id}`} className={styles.imageWrapper}>
				{isNewProduct && <Badge variant="novelty" />}
				{Boolean(promo) && <Badge variant="promo" value={promo} />}
				<DynamicImage
					src={imageURL}
					alt={name}
					style={{
						objectFit: 'cover',
						// zIndex: '-2',
					}}
					className={styles.image}
					sizes="(max-width: 500px)"
				/>
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
			<LikeButton productId={_id} favorites={favorite} />
		</li>
	);
};
