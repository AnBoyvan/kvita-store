'use client';

import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

import styles from './GalleryFilter.module.scss';
import type { GalleryFilterProps } from './GalleryFilter.props';

import { Modal } from '@/components/Features';
import { Htag, Icon } from '@/components/Shared';
import { Button } from '@/components/UI';
import { useModal, useQueryString } from '@/hooks';
import type { Tags } from '@/interfaces';

export const GalleryFilter: React.FC<GalleryFilterProps> = ({ tags, ...props }) => {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const { createQueryString } = useQueryString();
	const { modalRef, openModal, closeModal } = useModal();

	const tagsParam = searchParams.get('tags');
	const [checkedTags, setCheckedTags] = useState<Tags>(tagsParam?.split(',') || []);

	const changeTags = () => {
		const newTags = checkedTags.join(',');
		const queryString = createQueryString('tags', newTags);
		router.push(pathname + '?' + queryString);
		closeModal();
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		if (checkedTags?.includes(value)) {
			setCheckedTags(checkedTags.filter(tag => tag !== value));
		} else {
			setCheckedTags([...checkedTags, value]);
		}
	};

	const reset = () => {
		const queryString = createQueryString('tags', '');
		router.push(pathname + '?' + queryString);
		setCheckedTags([]);
		closeModal();
	};

	return (
		<div className={styles.wrapper} {...props}>
			<Button mode="default" variant="ghost" onClick={openModal} className={styles.filterBtn}>
				<span>Фільтр</span>
				<Icon name="Filter" />
			</Button>

			<Modal ref={modalRef} container>
				<div className={styles.filter}>
					<Htag tag="h2">Оберіть категорії:</Htag>
					<ul className={styles.tags}>
						{tags &&
							tags?.map((tag, index) => (
								<li key={index} className={styles.item}>
									<input
										id={`filter-${tag}`}
										value={tag}
										checked={checkedTags?.includes(tag)}
										type="checkbox"
										className={styles.input}
										onChange={handleChange}
									/>
									<label
										htmlFor={`filter-${tag}`}
										className={clsx(styles.label, checkedTags?.includes(tag) ? styles.checked : '')}
									>
										{tag}
									</label>
								</li>
							))}
					</ul>

					<div className={styles.buttons}>
						<Button mode="default" variant="primary" type="button" onClick={changeTags}>
							Готово
						</Button>
						<Button mode="default" variant="ghost" type="button" onClick={reset}>
							Скинути
						</Button>
					</div>
				</div>
			</Modal>
		</div>
	);
};
