'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import styles from './ProductsList.module.scss';
import type { ProductsListProps } from './ProductsList.props';

import { Pagination, ProductCard, Spinner } from '@/components/Shared';
import type { IProduct } from '@/interfaces';
import { productService } from '@/services/kvita-api';

export const ProductsList: React.FC<ProductsListProps> = ({ query, page, limit }) => {
	const [products, setProducts] = useState<IProduct[]>([]);

	const { data, isFetching } = useQuery({
		queryKey: ['products', query, page],
		queryFn: () => productService.find(query),
		placeholderData: keepPreviousData,
	});

	useEffect(() => {
		if (data) setProducts(data.result);
	}, [query, data]);

	return (
		<div className={styles.wrapper}>
			{isFetching ? (
				<Spinner />
			) : (
				<>
					<ul className={styles.list}>
						{products.map((product, index) => (
							<ProductCard order={index + 1} key={product._id} product={product} />
						))}
					</ul>
					{data && data.count > limit && <Pagination count={data.count} perPage={limit} />}
				</>
			)}
		</div>
	);
};
