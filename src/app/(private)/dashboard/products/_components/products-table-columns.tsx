import { createColumnHelper, type ColumnDef } from '@tanstack/react-table';

import { TableEditLink } from '@/components/Features';
import { PAGES } from '@/configs';
import type { IProduct } from '@/interfaces';
import {
	formatDate,
	inPriceRange,
	isPositive,
	isSelected,
	priceSorting,
	translate,
	valuesIncludes,
} from '@/utils/helpers';

const columnHelper = createColumnHelper<IProduct>();

export const productsColumns: ColumnDef<IProduct, any>[] = [
	columnHelper.accessor('name', {
		header: 'Назва',
		cell: props => <div className="w-full text-start">{props.getValue()}</div>,
	}),
	columnHelper.accessor('category', {
		header: 'Категорія',
		cell: props => <div className="w-full text-center">{translate(props.getValue())}</div>,
		meta: { visibility: 'md' },
		filterFn: valuesIncludes,
	}),
	columnHelper.accessor('price', {
		header: 'Ціна',
		cell: props => (
			<div>
				{Boolean(props.row.original.promoPrice) ? props.row.original.promoPrice : props.getValue()}
				&nbsp;грн
			</div>
		),
		filterFn: inPriceRange,
		sortingFn: priceSorting,
	}),
	columnHelper.accessor('promo', {
		header: 'Знижка',
		cell: props => <div>{props.getValue() ? `${props.getValue()} %` : ''}</div>,
		meta: { visibility: 'md' },
		filterFn: isPositive,
	}),
	columnHelper.accessor('createdAt', {
		header: 'Створено',
		cell: props => <div>{formatDate(props.getValue())}</div>,
		meta: { visibility: 'lg' },
	}),
	columnHelper.accessor('updatedAt', {
		header: 'Змінено',
		cell: props => {
			return <div>{formatDate(props.getValue())}</div>;
		},
		meta: { visibility: 'lg' },
	}),
	columnHelper.accessor('_id', {
		header: '',
		cell: props => {
			return <TableEditLink href={`${PAGES.DASHBOARD_COMPOSE}/${props.row.original._id}`} />;
		},
		enableSorting: false,
	}),
	columnHelper.accessor('isNewProduct', {
		header: '',
		filterFn: isSelected,
	}),
	columnHelper.accessor('isActive', {
		header: '',
		filterFn: isSelected,
	}),
];
