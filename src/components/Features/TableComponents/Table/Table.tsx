'use client';

import {
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { useEffect, useState, type ChangeEvent } from 'react';

import { TableCell } from '../TableCell/TableCell';
import { TableHead } from '../TableHead/TableHead';
import { TableRow } from '../TableRow/TableRow';

import { rowsPerPage } from './perTablePage';
import styles from './Table.module.scss';
import type { HiddenColumns, IData, TableProps } from './Table.props';

import { Icon } from '@/components/Shared';
import { Button, Select } from '@/components/UI';
import { tablePagination } from '@/utils/helpers';

export const Table = <T extends object>({
	hiddenColumns,
	tableData,
	dataType,
	columns,
	columnFilters,
}: TableProps<T>) => {
	const [data, setData] = useState<T[]>([]);

	const hidden: HiddenColumns = {};
	hiddenColumns.forEach(column => {
		hidden[column] = false;
	});

	const table = useReactTable({
		data,
		columns,
		state: {
			columnVisibility: hidden,
			columnFilters: columnFilters,
		},
		initialState: {
			pagination: {
				pageIndex: 0,
				pageSize: 25,
			},
		},
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
	});

	useEffect(() => {
		setData(tableData);
	}, [tableData]);

	const { firstOnPage, lastOnPage } = tablePagination(
		table.getState().pagination,
		table.getPaginationRowModel().rows,
	);

	return (
		<>
			<table className={styles.table}>
				<TableHead>
					{table.getHeaderGroups().map(headerGroup => (
						<TableRow key={headerGroup.id} dataType={dataType}>
							{headerGroup.headers.map(header => (
								<TableCell
									key={header.id}
									header
									visibility={header.column.columnDef.meta?.visibility}
									canSort={header.column.getCanSort()}
									sort={
										header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined
									}
									isSorted={header.column.getIsSorted()}
								>
									{flexRender(header.column.columnDef.header, header.getContext())}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableHead>
				<tbody>
					{table.getRowModel().rows.map(row => (
						<TableRow key={row.id} dataType={dataType} data={row.original as IData} link>
							{row.getVisibleCells().map(cell => (
								<TableCell key={cell.id} visibility={cell.column.columnDef.meta?.visibility}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))}
				</tbody>
			</table>
			<div className={styles.paginationWrapper}>
				<div className={styles.perPage}>
					На сторінці:&nbsp;
					<Select
						value={table.getState().pagination.pageSize}
						options={rowsPerPage}
						className={styles.select}
						onChange={(e: ChangeEvent<HTMLSelectElement>) =>
							table.setPageSize(Number(e.target.value))
						}
					/>
				</div>
				<div className={styles.pagination}>
					<Button
						mode="simple"
						className={styles.paginationBtn}
						disabled={!table.getCanPreviousPage()}
						onClick={() => table.firstPage()}
					>
						<Icon name="ChevronFirst" />
					</Button>
					<Button
						mode="simple"
						className={styles.paginationBtn}
						disabled={!table.getCanPreviousPage()}
						onClick={() => table.previousPage()}
					>
						<Icon name="ChevronLeft" />
					</Button>
					<div className={styles.counter}>
						{firstOnPage}-{lastOnPage}&nbsp;з&nbsp;{table.getRowCount()}
					</div>
					<Button
						mode="simple"
						className={styles.paginationBtn}
						disabled={!table.getCanNextPage()}
						onClick={() => table.nextPage()}
					>
						<Icon name="ChevronRight" />
					</Button>
					<Button
						mode="simple"
						className={styles.paginationBtn}
						disabled={!table.getCanNextPage()}
						onClick={() => table.lastPage()}
					>
						<Icon name="ChevronLast" />
					</Button>
				</div>
			</div>
		</>
	);
};
