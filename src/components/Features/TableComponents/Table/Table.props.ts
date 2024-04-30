import type { ColumnDef, ColumnFiltersState } from '@tanstack/react-table';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { IOrder, IProduct, IUser } from '@/interfaces';

export interface TableProps<T extends object>
	extends DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLDivElement> {
	tableData: T[];
	hiddenColumns: string[];
	dataType: IDataType;
	columns: ColumnDef<T>[];
	columnFilters: ColumnFiltersState;
}

export interface HiddenColumns {
	[key: string]: boolean;
}

export interface IData extends IProduct, IUser, IOrder {}

export type ITableData = IProduct[] | IUser[] | IOrder[];

export type IDataType = 'products' | 'users' | 'orders';
