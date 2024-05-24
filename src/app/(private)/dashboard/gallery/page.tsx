'use client';

import { useQuery } from '@tanstack/react-query';

import { GalleryActions, GalleryTags } from './_components';

import { Htag } from '@/components/Shared';
import { adminService } from '@/services/kvita-api';

export default function GalleryDashboardPage() {
	const { data } = useQuery({
		queryKey: ['tags'],
		queryFn: () => adminService.getTags(),
	});

	return (
		<>
			<Htag tag="h1">Галерея</Htag>
			<GalleryActions tags={data} />
			<GalleryTags tags={data} />
		</>
	);
}
