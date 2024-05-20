import { OrdersTable } from './_components';

import { Htag } from '@/components/Shared';

export default function OrdersDashboardPage() {
	return (
		<div>
			<Htag tag="h1">Замовлення</Htag>
			<OrdersTable />
		</div>
	);
}
