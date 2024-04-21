'use client';

import {
	ColumnFiltersState,
	getCoreRowModel,
	getFilteredRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

import styles from './Table.module.scss';
import type { TableProps } from './Table.props';

export const Table: React.FC<TableProps> = ({ hiddenColumns, columns, children, ...props }) => {
	const [data, setData] = useState([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

	const table = useReactTable({
		data,
		columns,
		state: {
			columnVisibility: {
				isNewProduct: false,
				isActive: false,
			},
			columnFilters: columnFilters,
		},
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
	});

	return (
		<table className={styles.table} {...props}>
			{children}
		</table>
	);
};
