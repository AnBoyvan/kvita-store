'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { ColumnFiltersState } from '@tanstack/react-table';
import { useState } from 'react';

import { usersColumns } from '../users-table-columns';
import { UsersTableFilter } from '../UsersTableFilter/UsersTableFilter';

import styles from './UsersTable.module.scss';

import { Table } from '@/components/Features';
import { userService } from '@/services/kvita-api';

export const UsersTable: React.FC = () => {
	const { data } = useQuery({
		queryKey: ['users'],
		queryFn: () => userService.find(),
		placeholderData: keepPreviousData,
		refetchInterval: 1000 * 60 * 2,
	});

	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

	return (
		<div className={styles.wrapper}>
			{data && (
				<>
					<UsersTableFilter filter={columnFilters} setFilter={setColumnFilters} />
					<Table
						tableData={data.result}
						dataType="users"
						columns={usersColumns}
						columnFilters={columnFilters}
						hiddenColumns={[]}
					/>
				</>
			)}
		</div>
	);
};
