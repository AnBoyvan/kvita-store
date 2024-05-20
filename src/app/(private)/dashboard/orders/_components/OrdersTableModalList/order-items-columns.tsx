import { createColumnHelper, type ColumnDef } from '@tanstack/react-table';

import type { ICartItem } from '@/interfaces';
import { priceSorting } from '@/utils/helpers';

const columnHelper = createColumnHelper<ICartItem>();

export const orderItemsColumns: ColumnDef<ICartItem, any>[] = [
	columnHelper.accessor('productName', {
		header: 'Назва',
		cell: props => <div className="w-full text-start">{props.getValue()}</div>,
	}),
	columnHelper.accessor('price', {
		header: 'Ціна',
		cell: props => (
			<div>
				{Boolean(props.row.original.promoPrice) ? props.row.original.promoPrice : props.getValue()}
				&nbsp;грн
			</div>
		),
		sortingFn: priceSorting,
	}),
	columnHelper.accessor('quantity', {
		header: 'К-сть',
		cell: props => <div>{props.getValue()}</div>,
	}),
	columnHelper.accessor('sum', {
		header: 'Сума',
		cell: props => <div>{props.getValue()}&nbsp;грн</div>,
	}),
];
