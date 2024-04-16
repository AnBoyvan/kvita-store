'use client';

import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useEffect, useState } from 'react';

import { productsColumns } from '../products-table-columns';

import styles from './ProductsTable.module.scss';
import type { ProductsTableProps } from './ProductsTable.props';

import { Table, TableCell, TableHead, TableRow } from '@/components/Features';
import { IProduct } from '@/interfaces';

export const ProductsTable: React.FC<ProductsTableProps> = ({ products, ...props }) => {
	const [data, setData] = useState<IProduct[]>([]);

	const table = useReactTable({
		data,
		columns: productsColumns,
		state: {
			columnVisibility: {
				isNewProduct: false,
				isActive: false,
			},
			columnFilters: [
				{
					id: 'isNewProduct',
					value: true,
				},
			],
		},
		getCoreRowModel: getCoreRowModel(),
		// getFilteredRowModel: getFilteredRowModel(),
	});

	useEffect(() => {
		setData(products);
	}, [products]);

	// console.log(table.getState().columnFilters);

	return (
		<div className={styles.wrapper} {...props}>
			<Table>
				<TableHead>
					{table.getHeaderGroups().map(headerGroup => (
						<TableRow key={headerGroup.id} className={styles.row}>
							{headerGroup.headers.map(header => (
								<TableCell
									key={header.id}
									header
									visibility={header.column.columnDef.meta?.visibility}
								>
									{flexRender(header.column.columnDef.header, header.getContext())}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableHead>
				<tbody>
					{table.getRowModel().rows.map(row => (
						<TableRow
							key={row.id}
							green={row.original.isNewProduct}
							blue={Boolean(row.original.promo && row.original.promo > 0)}
							gray={!row.original.isActive}
							link
							className={styles.row}
						>
							{row.getVisibleCells().map(cell => (
								<TableCell key={cell.id} visibility={cell.column.columnDef.meta?.visibility}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))}
				</tbody>
			</Table>
		</div>
	);
};
