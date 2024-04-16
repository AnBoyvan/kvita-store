'use client';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import styles from './OrdersCounter.module.scss';

import { Badge } from '@/components/Shared';
import { orderService } from '@/services/kvita-api';

export const OrdersCounter: React.FC = () => {
	const [newOrders, setNewOrders] = useState<number>();

	const { data } = useQuery({
		queryKey: ['orders', 'new'],
		queryFn: () => orderService.find('status=new'),
		staleTime: 5 * 60 * 1000,
	});

	const isNew = data && data?.count > 0;

	useEffect(() => {
		if (data) setNewOrders(data.count);
	}, [data]);

	return <>{isNew && <Badge variant="count" value={newOrders} className={styles.counter} />}</>;
};
