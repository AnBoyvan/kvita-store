'use client';

import { useQuery } from '@tanstack/react-query';

import { FavoritesItem } from '../FavoritesItem/FavoritesItem';

import styles from './FavoritesList.module.scss';

import { productService } from '@/services/kvita-api';

export const FavoritesList: React.FC = () => {
	const { data } = useQuery({
		queryKey: ['products', 'favorite'],
		queryFn: () => productService.favorite(),
	});

	return (
		<div className={styles.favorites}>
			{data && data.map(product => <FavoritesItem key={product._id} product={product} />)}
		</div>
	);
};
