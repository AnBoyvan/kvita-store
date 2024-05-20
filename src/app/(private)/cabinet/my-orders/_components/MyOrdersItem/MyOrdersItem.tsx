'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

import { MyOrdersItemDetails } from '../MyOrdersItemDetails/MyOrdersItemDetails';
import { MyOrdersItemProduct } from '../MyOrdersItemProduct/MyOrdersItemProduct';

import styles from './MyOrdersItem.module.scss';
import type { MyOrdersItemProps } from './MyOrdersItem.props';

import { CustomImage, Icon } from '@/components/Shared';
import { Button } from '@/components/UI';
import { PAGES } from '@/configs';
import { formatDate, translate } from '@/utils/helpers';

export const MyOrdersItem: React.FC<MyOrdersItemProps> = ({ order, ...props }) => {
	const [open, setOpen] = useState<boolean>(false);

	const { items, status, publicId, total, createdAt, discount, discountSum } = order;

	const headItems = items.map(i => (
		<Link key={i.productId} href={`${PAGES.PRODUCTS}/${i.productId}`} className={styles.image}>
			<CustomImage
				src={i.productImage}
				alt={i.productName}
				sizes="(max-width: 70px)"
				square
				className="rounded-10"
			/>
		</Link>
	));

	const sum = items.reduce((acc: number, item) => acc + item.sum, 0);

	return (
		<li className={styles.order} {...props}>
			<div className={styles.head}>
				<div className={styles.headBlock}>
					<div className={styles.headWrapper}>
						<span>
							№{publicId}&nbsp;від&nbsp;{formatDate(createdAt)}
						</span>
						<b>{translate(status)}</b>
					</div>
					{!open && (
						<div className={styles.headWrapper}>
							<span>Сума замовлення:</span>
							<b>{total}&nbsp;грн</b>
						</div>
					)}
				</div>

				{!open && <div className={styles.headItems}>{headItems}</div>}
				<Button
					mode="link"
					className={clsx(styles.button, open && styles.open)}
					onClick={() => setOpen(!open)}
				>
					<Icon name="ChevronDown" />
				</Button>
			</div>

			{open && (
				<ul className={styles.wrapper}>
					{items.map(i => (
						<MyOrdersItemProduct key={i.productId} product={i} />
					))}
					<MyOrdersItemDetails
						total={total}
						sum={sum}
						discount={discount ? discount : 0}
						discountSum={discountSum ? discountSum : 0}
					/>
				</ul>
			)}
		</li>
	);
};
