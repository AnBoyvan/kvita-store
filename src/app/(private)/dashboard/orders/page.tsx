import { Metadata } from 'next';

import { OrdersTable } from './_components';

import { Htag } from '@/components/Shared';

export const metadata: Metadata = {
	title: 'Замовлення',
	robots: { index: false, follow: false },
};

export default function OrdersDashboardPage() {
	return (
		<>
			<Htag tag="h1">Замовлення</Htag>
			<OrdersTable />
		</>
	);
}
