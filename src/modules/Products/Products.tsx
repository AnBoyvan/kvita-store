'use client';

import { useForm } from 'react-hook-form';
import styles from './Products.module.scss';
import { Select } from '@/ui/Select/Select';
import { CATEGORIES } from '@/configs/categories.config';
import { ChangeEvent } from 'react';
import { useQueryString } from '@/hooks/useQueryString';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ProductsPageFilter } from './ProductsPageFilter/ProductsPageFilter';

// const categoryOptions = [{ title: 'Всі категорії', value: '' }, ...CATEGORIES];
// const sortOptions = [
// 	{ title: 'За замовчуванням', value: '' },
// 	{ title: 'За новизною', value: 'created-asc' },
// 	{ title: 'Від дешевших', value: 'price-asc' },
// 	{ title: 'Від дорожчих', value: 'price-desc' },
// ];

export const Products: React.FC = () => {
	// const pathname = usePathname();
	// const router = useRouter();
	const searchParams = useSearchParams();
	// const { createQueryString, createSortQuery } = useQueryString();
	const category = searchParams.get('category');
	const sort = `${searchParams.get('sortField')}` + '-' + `${searchParams.get('sortOrder')}`;

	// const { register } = useForm({
	// 	defaultValues: {
	// 		category: searchParams.get('category') ? searchParams.get('category') : '',
	// 		sort:
	// 			searchParams.get('sortField') && searchParams.get('sortOrder')
	// 				? `${searchParams.get('sortField')}` + '-' + `${searchParams.get('sortOrder')}`
	// 				: '',
	// 	},
	// });

	// const handleCategoryChange = (e: ChangeEvent<HTMLFormElement>) => {
	// 	const { name, value } = e.target;
	// 	if (name === 'sort') {
	// 		const queryString = createSortQuery(value);
	// 		router.push(pathname + '?' + queryString);
	// 		return;
	// 	}
	// 	const queryString = createQueryString(name, value);
	// 	router.push(pathname + '?' + queryString);
	// };

	return <></>;
};
