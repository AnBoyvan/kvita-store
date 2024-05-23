import { Suspense } from 'react';

import { OrdersTable } from './_components';

import { Htag, Spinner } from '@/components/Shared';

export default function OrdersDashboardPage() {
	return (
		<Suspense fallback={<Spinner />}>
			<Htag tag="h1">Замовлення</Htag>
			<OrdersTable />
		</Suspense>
	);
}
