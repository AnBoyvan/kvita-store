import styles from './SearchModal.module.scss';
import { SubmitHandler } from 'react-hook-form';
import { ChangeEvent, useContext, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { productService } from '@/services/product.service';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PAGES } from '@/configs/pages-url.config';
import { ModalContext } from '@/hooks/useModal';
import { Search } from '@/ui/Search/Search';
import { useQueryString } from '@/hooks/useQueryString';

export const SearchModal = () => {
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

	const onResetClick = () => {
		setSearch('');
	};

	const list =
		data &&
		data.result.map(({ _id, name, imageURL }) => {
			return (
				<li key={_id} className={styles.item}>
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
					<div>{name}</div>
				</li>
			);
		});

	return (
		<div className={styles.search}>
			<Search
				variant="primary"
				handleReset={onResetClick}
				submitAction={onSubmit}
				onChange={onChange}
			/>
			{data && <ul className={styles.list}>{list}</ul>}
			{data && data.count === 0 && search !== '' && (
				<div className={styles.notFound}>По Вашому запиту нічого не знайдено</div>
			)}
		</div>
	);
};
