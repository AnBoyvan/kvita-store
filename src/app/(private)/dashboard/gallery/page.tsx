'use client';

import { useQuery } from '@tanstack/react-query';
import { Suspense } from 'react';

import { GalleryActions, GalleryTags } from './_components';

import { Htag, Spinner } from '@/components/Shared';
import { adminService } from '@/services/kvita-api';

export default function GalleryDashboardPage() {
	const { data } = useQuery({
		queryKey: ['tags'],
		queryFn: () => adminService.getTags(),
	});

	return (
		<Suspense fallback={<Spinner />}>
			<Htag tag="h1">Галерея</Htag>
			<GalleryActions tags={data} />
			<GalleryTags tags={data} />
		</Suspense>
	);
}
