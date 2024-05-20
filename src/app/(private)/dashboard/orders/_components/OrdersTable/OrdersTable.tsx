'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { ColumnFiltersState } from '@tanstack/react-table';
import { useState } from 'react';

import { ordersColumns } from '../orders-table-columns';
import { OrdersTableFilter } from '../OrdersTableFilter/OrdersTableFilter';

import styles from './OrdersTable.module.scss';

import { Table } from '@/components/Features';
import { orderService } from '@/services/kvita-api';

export const OrdersTable: React.FC = () => {
	const { data } = useQuery({
		queryKey: ['orders'],
		queryFn: () => orderService.find(),
		placeholderData: keepPreviousData,
		refetchInterval: 1000 * 60 * 2,
	});

	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

	const hiddenColumns = ['items', 'delivery'];

	return (
		<div className={styles.wrapper}>
			{data && (
				<>
					<OrdersTableFilter
						filter={columnFilters}
						setFilter={setColumnFilters}
						minTotal={data.minTotal}
						maxTotal={data.maxTotal}
					/>
					<Table
						tableData={data.result}
						dataType="orders"
						columns={ordersColumns}
						columnFilters={columnFilters}
						hiddenColumns={hiddenColumns}
					/>
				</>
			)}
		</div>
	);
};
