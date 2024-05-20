import { createColumnHelper, type ColumnDef } from '@tanstack/react-table';

import { UsersTableUpdate } from './UsersTableUpdate/UsersTableUpdate';

import type { IUser } from '@/interfaces';
import { formatDate, isPositive, translate, valuesIncludes } from '@/utils/helpers';

const columnHelper = createColumnHelper<IUser>();

export const usersColumns: ColumnDef<IUser, any>[] = [
	columnHelper.accessor('name', {
		header: 'Ім’я',
		cell: props => <div className="w-full text-start">{props.getValue()}</div>,
	}),
	columnHelper.accessor('phone', {
		header: 'Телефон',
		cell: props => <div className="w-full text-center">{props.getValue()}</div>,
		meta: { visibility: 'md' },
		enableSorting: false,
	}),
	columnHelper.accessor('discount', {
		header: 'Знижка',
		cell: props => <div>{props.getValue() ? `${props.getValue()} %` : ''}</div>,
		filterFn: isPositive,
	}),
	columnHelper.accessor('role', {
		header: 'Категорія',
		cell: props => <div className="w-full text-center">{translate(props.getValue())}</div>,
		meta: { visibility: 'md' },
		enableSorting: false,
		filterFn: valuesIncludes,
	}),
	columnHelper.accessor('createdAt', {
		header: 'Створено',
		cell: props => <div>{formatDate(props.getValue())}</div>,
		meta: { visibility: 'lg' },
	}),
	columnHelper.accessor('_id', {
		header: '',
		cell: props => {
			return <UsersTableUpdate user={props.row.original} />;
		},
		enableSorting: false,
	}),
];
