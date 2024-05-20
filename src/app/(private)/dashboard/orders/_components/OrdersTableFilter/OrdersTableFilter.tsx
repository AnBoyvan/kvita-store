import { useQuery } from '@tanstack/react-query';

import type { OrdersTableFilterProps } from './OrdersTableFilter.props';

import {
	TableFilter,
	TableFilterDate,
	TableFilterGroup,
	TableFilterItems,
	TableFilterRange,
	TableFilterSelect,
} from '@/components/Features';
import { SELECT, STATUSES } from '@/configs';
import { productService } from '@/services/kvita-api';

export const OrdersTableFilter: React.FC<OrdersTableFilterProps> = ({
	filter,
	setFilter,
	minTotal,
	maxTotal,
}) => {
	const query = 'sortField=name&sortOrder=asc';

	const { data } = useQuery({
		queryKey: ['products', query],
		queryFn: () => productService.find(query),
	});

	const items =
		data &&
		data.result.map(i => {
			return {
				value: i._id,
				label: i.name,
			};
		});

	return (
		<>
			<TableFilter searchId="customer_name" filter={filter} setFilter={setFilter}>
				<TableFilterItems
					items={items}
					id="items"
					title="Продукція:"
					filter={filter}
					setFilter={setFilter}
				/>
				<TableFilterGroup
					title="Статус:"
					id="status"
					data={STATUSES}
					filter={filter}
					setFilter={setFilter}
				/>
				<TableFilterSelect
					id="delivery"
					title="Доставка:"
					data={SELECT.isDelivery}
					filter={filter}
					setFilter={setFilter}
				/>
				<TableFilterRange
					id="total"
					title="Сума:"
					filter={filter}
					setFilter={setFilter}
					min={minTotal}
					max={maxTotal}
				/>
				<TableFilterDate id="createdAt" title="Дата:" filter={filter} setFilter={setFilter} />
			</TableFilter>
		</>
	);
};
