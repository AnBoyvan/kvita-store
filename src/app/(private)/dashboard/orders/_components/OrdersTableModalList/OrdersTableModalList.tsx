import styles from './OrdersTableModalList.module.scss';
import type { OrdersTableModalListProps } from './OrdersTableModalList.props';
import { orderItemsColumns } from './order-items-columns';

import { Table } from '@/components/Features';
import { Htag } from '@/components/Shared';

export const OrdersTableModalList: React.FC<OrdersTableModalListProps> = ({ items }) => {
	return (
		<div className={styles.wrapper}>
			<Htag tag="h3">Замовлення</Htag>
			<Table
				tableData={items}
				dataType="items"
				columns={orderItemsColumns}
				columnFilters={[]}
				hiddenColumns={[]}
				hidePagination={items.length > 25 ? false : true}
			/>
		</div>
	);
};
