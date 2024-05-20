import { createColumnHelper, type ColumnDef } from '@tanstack/react-table';

import { OrdersTableUpdate } from './OrdersTableUpdate/OrdersTableUpdate';

import type { IOrder } from '@/interfaces';
import {
	formatDate,
	inDateRange,
	isSelected,
	itemsIncludes,
	translate,
	valuesIncludes,
} from '@/utils/helpers';

const columnHelper = createColumnHelper<IOrder>();

export const ordersColumns: ColumnDef<IOrder, any>[] = [
	columnHelper.accessor('publicId', {
		header: 'Номер',
		cell: props => <div className="w-full text-start">{props.getValue()}</div>,
		meta: { visibility: 'md' },
		enableSorting: false,
	}),
	columnHelper.accessor('customer.name', {
		header: 'Замовник',
		cell: props => <div className="w-full text-center">{props.getValue()}</div>,
	}),
	columnHelper.accessor('total', {
		header: 'Сума',
		cell: props => <div>{props.getValue()}&nbsp;грн</div>,
		filterFn: 'inNumberRange',
	}),
	columnHelper.accessor('createdAt', {
		header: 'Дата',
		cell: props => <div>{formatDate(props.getValue())}</div>,
		meta: { visibility: 'lg' },
		filterFn: inDateRange,
	}),
	columnHelper.accessor('status', {
		header: 'Статус',
		cell: props => <div className="w-full text-center">{translate(props.getValue())}</div>,
		meta: { visibility: 'lg' },
		filterFn: valuesIncludes,
	}),
	columnHelper.accessor('_id', {
		header: '',
		cell: props => {
			return <OrdersTableUpdate order={props.row.original} />;
		},
		enableSorting: false,
	}),
	columnHelper.accessor('items', {
		header: '',
		filterFn: itemsIncludes,
	}),
	columnHelper.accessor('delivery', {
		header: '',
		filterFn: isSelected,
	}),
];
