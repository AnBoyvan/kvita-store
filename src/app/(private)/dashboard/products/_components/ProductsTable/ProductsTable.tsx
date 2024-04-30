'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { type ColumnFiltersState } from '@tanstack/react-table';
import { useState } from 'react';

import { productsColumns } from '../products-table-columns';
import { ProductsTableFilter } from '../ProductsTableFilter/ProductsTableFilter';

import styles from './ProductsTable.module.scss';
import type { ProductsTableProps } from './ProductsTable.props';

import { Table } from '@/components/Features';
import { productService } from '@/services/kvita-api';

export const ProductsTable: React.FC<ProductsTableProps> = ({ ...props }) => {
	const { data } = useQuery({
		queryKey: ['products'],
		queryFn: () => productService.find(),
		placeholderData: keepPreviousData,
		refetchInterval: 1000 * 60 * 2,
	});

	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

	const hiddenColumns = ['isNewProduct', 'isActive'];

	return (
		<div className={styles.wrapper} {...props}>
			{data && (
				<>
					<ProductsTableFilter
						filter={columnFilters}
						setFilter={setColumnFilters}
						minPrice={data.minProductPrice}
						maxPrice={data.maxProductPrice}
					/>
					<Table
						tableData={data?.result}
						dataType="products"
						columns={productsColumns}
						columnFilters={columnFilters}
						hiddenColumns={hiddenColumns}
					/>
				</>
			)}
		</div>
	);
};
