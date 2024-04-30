'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import { ProductCompose } from '@/components/Features';
import { Htag } from '@/components/Shared';
import { productService } from '@/services/kvita-api';

export default function EditDashboardPage() {
	const params = useParams<{ id: string }>();

	const { data, isFetched } = useQuery({
		queryKey: ['products', params.id],
		queryFn: () => productService.findById(params.id),
		staleTime: 0,
		refetchOnMount: true,
	});

	return (
		<div>
			<Htag tag="h1">Редагування</Htag>
			{isFetched && <ProductCompose isNew={false} product={data} />}
		</div>
	);
}
