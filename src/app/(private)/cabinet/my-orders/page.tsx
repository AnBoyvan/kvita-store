import { Suspense } from 'react';

import { MyOrdersList } from './_components';

import { Htag, Spinner } from '@/components/Shared';

export default function MyOrdersPage() {
	return (
		<Suspense fallback={<Spinner />}>
			<Htag tag="h1">Мої замовлення</Htag>
			<MyOrdersList />
		</Suspense>
	);
}
