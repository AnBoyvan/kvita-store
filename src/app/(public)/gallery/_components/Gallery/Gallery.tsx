'use client';

import { useQuery } from '@tanstack/react-query';

import { GalleryFilter } from '../GalleryFilter/GalleryFilter';
import { GalleryList } from '../GalleryList/GalleryList';

import styles from './Gallery.module.scss';
import type { GalleryProps } from './Gallery.props';

import { adminService } from '@/services/kvita-api';

export const Gallery: React.FC<GalleryProps> = ({ ...props }) => {
	const { data } = useQuery({
		queryKey: ['tags'],
		queryFn: () => adminService.getTags(),
	});

	return (
		<div className={styles.wrapper} {...props}>
			<GalleryFilter tags={data} />
			<GalleryList tags={data} />
		</div>
	);
};
