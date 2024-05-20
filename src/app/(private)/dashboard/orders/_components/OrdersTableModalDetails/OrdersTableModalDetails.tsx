import styles from './OrdersTableModalDetails.module.scss';
import type { OrdersTableModalDetailsProps } from './OrdersTableModalDetails.props';

import { Amount } from '@/components/Shared';

export const OrdersTableModalDetails: React.FC<OrdersTableModalDetailsProps> = ({
	sum,
	discount,
	discountSum,
	total,
}) => {
	return (
		<div className={styles.details}>
			<div className={styles.wrapper}>
				<Amount title="Разом" bordered={true}>
					<span>{sum}&nbsp;грн</span>
				</Amount>
				<Amount title="Знижка" bordered={true}>
					<b>{discount ? discount : 0}%</b>
					<span>=</span>
					<span>{discountSum ? discountSum : 0}&nbsp;грн</span>
				</Amount>
			</div>
			<Amount title="Вартість замовлення" bordered={true} className={styles.total}>
				<span>{total}&nbsp;грн</span>
			</Amount>
		</div>
	);
};
