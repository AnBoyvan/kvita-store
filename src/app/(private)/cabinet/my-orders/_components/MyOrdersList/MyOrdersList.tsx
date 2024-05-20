'use client';

import { useQuery } from '@tanstack/react-query';

import { MyOrdersItem } from '../MyOrdersItem/MyOrdersItem';

import styles from './MyOrdersList.module.scss';

import { orderService } from '@/services/kvita-api';

export const MyOrdersList: React.FC = () => {
	const { data } = useQuery({
		queryKey: ['orders', 'own'],
		queryFn: () => orderService.findOwn(),
	});

	return (
		<ul className={styles.list}>
			{data && data.map(order => <MyOrdersItem key={order._id} order={order} />)}
		</ul>
	);
};
