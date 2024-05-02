'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { GalleryActions, GalleryTags } from './_components';

import { Htag } from '@/components/Shared';
import { Tags } from '@/interfaces';
import { adminService } from '@/services/kvita-api';

export default function GalleryDashboardPage() {
	const { data } = useQuery({
		queryKey: ['tags'],
		queryFn: () => adminService.getTags(),
	});
	const [checkedTags, setCheckedTags] = useState<Tags>(data || []);

	return (
		<div>
			<Htag tag="h1">Галерея</Htag>
			<GalleryActions tags={data} />
			<GalleryTags tags={data} />
		</div>
	);
}
