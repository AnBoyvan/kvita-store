import { sortOrders } from '@/configs/sort-orders.config';
import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export const useQueryString = () => {
	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.delete('page');

			if (!value) {
				params.delete(name);
				return params.toString();
			}

			params.set(name, value);
			return params.toString();
		},
		[searchParams],
	);

	const createSortQuery = useCallback(
		(value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.delete('page');

			if (!value) {
				params.delete('sortField');
				params.delete('sortOrder');
				return params.toString();
			}

			const { field, order } = sortOrders(value);

			params.set('sortField', field);
			params.set('sortOrder', order);
			return params.toString();
		},
		[searchParams],
	);

	return { createQueryString, createSortQuery };
};
