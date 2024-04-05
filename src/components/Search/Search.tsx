'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useContext, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import styles from './Search.module.scss';

import { PAGES } from '@/configs';
import { ModalContext, useQueryString } from '@/hooks';
import { productService } from '@/services/kvita-api';
import { SearchField } from '@/ui';

export const Search: React.FC = () => {
	const [search, setSearch] = useState<string | undefined>('');
	const router = useRouter();
	const { createQueryString } = useQueryString();
	const { closeModal } = useContext(ModalContext);

	const { data } = useQuery({
		queryKey: ['products', search],
		queryFn: () => {
			const data = productService.find(`search=${search}`);
			return data;
		},
		enabled: !!search && search.trim() !== '',
	});

	const onChange = (e: ChangeEvent<HTMLFormElement>) => {
		setSearch(e.target.value);
	};

	const onSubmit: SubmitHandler<{ [key: string]: string }> = ({ search }) => {
		const queryString = createQueryString('search', search);
		router.push(`${PAGES.PRODUCTS}` + '?' + queryString);
		closeModal();
	};

	const handleClick = () => {
		closeModal();
	};

	const onResetClick = () => {
		setSearch('');
	};

	const list =
		data &&
		data.result.map(({ _id, name, imageURL }) => {
			return (
				<li key={_id} onClick={handleClick}>
					<Link href={`/products/${_id}`} className={styles.item}>
						<div className={styles.imgWrapper}>
							<Image
								src={imageURL}
								alt={name}
								fill
								style={{
									objectFit: 'cover',
								}}
								sizes="100%"
								className={styles.img}
							/>
						</div>
						<div className={styles.name}>{name}</div>
					</Link>
				</li>
			);
		});

	return (
		<div className={styles.search}>
			<SearchField
				variant="primary"
				handleReset={onResetClick}
				submitAction={onSubmit}
				onChange={onChange}
				autoFocus={true}
			/>
			{data && <ul className={styles.list}>{list}</ul>}
			{data && data.count === 0 && search !== '' && (
				<div className={styles.notFound}>По Вашому запиту нічого не знайдено</div>
			)}
		</div>
	);
};
