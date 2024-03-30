'use client';

import styles from './ProductsList.module.scss';
import { Pagination } from '@/components/Pagination/Pagination';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { productService } from '@/services/product.service';
import { ProductCard } from '@/components/ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import { IProduct } from '@/interfaces/product.interface';
import { ProductsListProps } from './ProductsList.props';
import { Spinner } from '@/ui/Spinner/Spinner';

export const ProductsList: React.FC<ProductsListProps> = ({ query, page, limit }) => {
	const [products, setProducts] = useState<IProduct[]>([]);

	const { data, isFetching } = useQuery({
		queryKey: ['products', query, page],
		queryFn: () => productService.find(query),
		placeholderData: keepPreviousData,
	});

	const productsList = products.map((product, index) => (
		<ProductCard order={index + 1} key={product._id} product={product} />
	));

	useEffect(() => {
		if (data) setProducts(data.result);
	}, [query, data]);

	return (
		<div className={styles.wrapper}>
			{isFetching ? (
				<Spinner />
			) : (
				<>
					<ul className={styles.list}>{productsList}</ul>
					{data && data.count > limit && <Pagination count={data.count} perPage={limit} />}
				</>
			)}
		</div>
	);
};
