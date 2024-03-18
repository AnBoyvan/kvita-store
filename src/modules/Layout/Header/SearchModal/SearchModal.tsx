import styles from './SearchModal.module.scss';
import clsx from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { IProduct } from '@/interfaces/product.interface';
import debounce from 'lodash.debounce';
import { useQuery } from '@tanstack/react-query';
import { productService } from '@/services/product.service';
import { Button } from '@/ui/Button/Button';
import { Icon } from '@/ui/Icon/Icon';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PAGES } from '@/configs/pages-url.config';
import { ModalContext } from '@/hooks/useModal';

export const SearchModal = () => {
	const [search, setSearch] = useState<string | undefined>('');
	const router = useRouter();
	const { closeModal } = useContext(ModalContext);

	const { register, handleSubmit, reset } = useForm({
		mode: 'onChange',
		defaultValues: {
			search: '',
		},
	});

	const { data } = useQuery({
		queryKey: ['products', search],
		queryFn: () => {
			const data = productService.find(`search=${search}`);
			return data;
		},
		enabled: !!search && search.trim() !== '',
	});

	const onChange = async (e: ChangeEvent<HTMLFormElement>) => {
		setSearch(e.target.value);
	};

	const onSubmit: SubmitHandler<{ search: string }> = ({ search }) => {
		router.push(`${PAGES.PRODUCTS}?search=${search}`);
		closeModal();
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
		<form
			className={styles.form}
			onSubmit={handleSubmit(onSubmit)}
			onChange={debounce(e => onChange(e), 500)}
		>
			<input
				type="text"
				{...register('search')}
				className={styles.input}
				placeholder="пошук..."
				autoComplete="off"
			/>
			<Button
				type="reset"
				mode="simple"
				className={styles.resetBtn}
				onClick={() => {
					reset();
					setSearch('');
				}}
			>
				<Icon name="X" />
			</Button>
			<Button type="submit" mode="default" variant="primary" className={styles.submitBtn}>
				<Icon name="Search" />
			</Button>
			{data && <ul className={styles.list}>{list}</ul>}
			{data && data.count === 0 && search !== '' && (
				<div className={styles.notFound}>По Вашому запиту нічого не знайдено</div>
			)}
		</form>
	);
};
