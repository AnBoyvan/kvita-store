'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { GalleryEdit } from '../GalleryEdit/GalleryEdit';
import { GalleryItem } from '../GalleryItem/GalleryItem';
import { GalleryItemRemove } from '../GalleryItemRemove/GalleryItemRemove';
import { GalleryModal } from '../GalleryModal/GalleryModal';

import styles from './GalleryList.module.scss';
import type { GalleryListProps } from './GalleryList.props';

import { Spinner } from '@/components/Shared';
import type { IPicture } from '@/interfaces';
import { pictureService } from '@/services/kvita-api';

export const GalleryList: React.FC<GalleryListProps> = ({ tags, ...props }) => {
	const { ref, inView } = useInView();
	const searchParams = useSearchParams();
	const tagsParam = searchParams.get('tags');

	const [pictures, setPictures] = useState<IPicture[]>([]);
	const [compose, setCompose] = useState<IPicture | null>(null);
	const [removePicture, setRemovePicture] = useState<IPicture | null>(null);
	const [current, setCurrent] = useState<number | null>(null);

	const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery({
		queryKey: ['pictures', tagsParam || ''],
		queryFn: props => pictureService.find(props),
		initialPageParam: 1,
		getNextPageParam: (lastPage, pages) => {
			return lastPage.length ? pages.length + 1 : undefined;
		},
	});

	const list = pictures.map((pic, index) => (
		<GalleryItem
			key={pic._id}
			picture={pic}
			order={((index + 1) % 12) + 1}
			setCompose={() => setCompose(pic)}
			setRemovePicture={() => setRemovePicture(pic)}
			setCurrent={() => setCurrent(index)}
		/>
	));

	useEffect(() => {
		if (data && data?.pages) {
			const pics = data.pages.reduce((result, array) => result.concat(array), []);
			setPictures(pics);
		}
	}, [data]);

	useEffect(() => {
		const changeIndex = current && current + 2;

		if ((inView && hasNextPage) || (changeIndex && changeIndex >= pictures.length && hasNextPage))
			fetchNextPage();
	}, [inView, hasNextPage, fetchNextPage, current]);

	return (
		<>
			<ul className={styles.list} {...props}>
				{data?.pages && list}
				{hasNextPage && <div ref={ref}></div>}
			</ul>
			{isFetching && <Spinner />}

			{removePicture && (
				<GalleryItemRemove removePicture={removePicture} setRemovePicture={setRemovePicture} />
			)}

			{compose && <GalleryEdit picture={compose} tags={tags} setCompose={() => setCompose(null)} />}

			{current !== null && (
				<GalleryModal current={current} setCurrent={setCurrent} pictures={pictures} />
			)}
		</>
	);
};
