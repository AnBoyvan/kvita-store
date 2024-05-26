'use client';

import { useQuery } from '@tanstack/react-query';

import { GalleryActions } from '../GalleryActions/GalleryActions';
import { GalleryTags } from '../GalleryTagsList/GalleryTagsList';

import { adminService } from '@/services/kvita-api';

export const GalleryDashboard: React.FC = () => {
	const { data } = useQuery({
		queryKey: ['tags'],
		queryFn: () => adminService.getTags(),
	});

	return (
		<>
			<GalleryActions tags={data} />
			<GalleryTags tags={data} />
		</>
	);
};
