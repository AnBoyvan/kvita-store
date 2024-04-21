import type { ColumnDef } from '@tanstack/react-table';
import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TableProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement> {
	children: ReactNode;
	hiddenColumns: string[];
	columns: ColumnDef<T>;
}
