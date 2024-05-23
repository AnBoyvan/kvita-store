import { Suspense } from 'react';

import { ProductCompose } from '@/components/Features';
import { Htag, Spinner } from '@/components/Shared';

export default function ComposeDashboardPage() {
	return (
		<Suspense fallback={<Spinner />}>
			<Htag tag="h1">Нова позиція</Htag>
			<ProductCompose isNew={true} />
		</Suspense>
	);
}
