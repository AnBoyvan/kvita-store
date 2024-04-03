'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';

import styles from './ProductsPageFilter.module.scss';
import { ProductsPageFilterProps } from './ProductsPageFilter.props';

import { CATEGORIES } from '@/configs';
import { useQueryString } from '@/hooks';
import { Button, Icon, Select } from '@/ui';

const categoryOptions = [{ title: 'Всі категорії', value: '' }, ...CATEGORIES];
const sortOptions = [
	{ title: 'За замовчуванням', value: '' },
	{ title: 'За новизною', value: 'createdAt-asc' },
	{ title: 'Від дешевших', value: 'price-asc' },
	{ title: 'Від дорожчих', value: 'price-desc' },
];

export const ProductsPageFilter: React.FC<ProductsPageFilterProps> = () => {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const { createQueryString, createSortQuery } = useQueryString();

	const search = searchParams.get('search');
	const category = searchParams.get('category');
	const sortField = searchParams.get('sortField');
	const sortOrder = searchParams.get('sortOrder');

	const { register, watch } = useForm({
		defaultValues: {
			category: category ? category : '',
			sort: sortField && sortOrder ? `${sortField}` + '-' + `${sortOrder}` : '',
		},
	});

	const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
		const { name, value } = e.target;
		if (name === 'sort') {
			const queryString = createSortQuery(value);
			router.push(pathname + '?' + queryString);
			return;
		}
		const queryString = createQueryString(name, value);
		router.push(pathname + '?' + queryString);
	};

	const clearSearch = () => {
		const queryString = createQueryString('search', '');
		router.push(pathname + '?' + queryString);
	};

	return (
		<div className={styles.filter}>
			<form className={styles.form} onChange={handleChange}>
				<Select
					{...register('category')}
					variant="products"
					current={watch('category')}
					options={categoryOptions}
				/>
				<Select
					{...register('sort')}
					variant="products"
					current={watch('sort')}
					options={sortOptions}
				/>
			</form>
			{search && (
				<div className={styles.search}>
					<span className={styles.searchTitle}>Пошук:</span>
					{search}
					<Button mode="link" onClick={clearSearch}>
						<Icon name="X" size={16} />
					</Button>
				</div>
			)}
		</div>
	);
};
