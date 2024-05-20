import Link from 'next/link';

import styles from './MyOrdersItemProduct.module.scss';
import type { MyOrdersItemProductProps } from './MyOrdersItemProduct.props';

import { CustomImage } from '@/components/Shared';
import { PAGES } from '@/configs';

export const MyOrdersItemProduct: React.FC<MyOrdersItemProductProps> = ({ product }) => {
	const { productId, productImage, productName, quantity, price, promoPrice, sum } = product;

	return (
		<div className={styles.product}>
			<div className={styles.title}>
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
					<span>Ціна:</span>
					<b>{promoPrice ? promoPrice : price}&nbsp;грн</b>
				</div>
				<div className={styles.wrapper}>
					<span>Кількість:</span>
					<b>{quantity}</b>
				</div>
				<div className={styles.wrapper}>
					<span>Сума:</span>
					<b>{sum}&nbsp;грн</b>
				</div>
			</div>
		</div>
	);
};
