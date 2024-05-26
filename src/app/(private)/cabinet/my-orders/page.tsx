import { Metadata } from 'next';

import { MyOrdersList } from './_components';

import { Htag } from '@/components/Shared';

export const metadata: Metadata = {
	title: 'Мої замовлення',
	robots: { index: false, follow: false },
};

export default function MyOrdersPage() {
	return (
		<>
			<Htag tag="h1">Мої замовлення</Htag>
			<MyOrdersList />
		</>
	);
}
