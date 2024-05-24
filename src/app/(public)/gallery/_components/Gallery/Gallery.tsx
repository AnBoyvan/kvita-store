'use client';

import { useQuery } from '@tanstack/react-query';
import { Suspense } from 'react';

import { GalleryFilter } from '../GalleryFilter/GalleryFilter';
import { GalleryList } from '../GalleryList/GalleryList';

import styles from './Gallery.module.scss';
import type { GalleryProps } from './Gallery.props';

import { Spinner } from '@/components/Shared';
import { adminService } from '@/services/kvita-api';

export const Gallery: React.FC<GalleryProps> = ({ ...props }) => {
	const { data } = useQuery({
		queryKey: ['tags'],
		queryFn: () => adminService.getTags(),
	});

	return (
		<div className={styles.wrapper} {...props}>
			<Suspense fallback={<Spinner />}>
				<GalleryFilter tags={data} />
				<GalleryList tags={data} />
			</Suspense>
		</div>
	);
};
