import { MyOrdersList } from './_components';

import { Htag } from '@/components/Shared';

export default function MyOrdersPage() {
	return (
		<>
			<Htag tag="h1">Мої замовлення</Htag>
			<MyOrdersList />
		</>
	);
}
