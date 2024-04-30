import type { SortDirection } from '@tanstack/react-table';
import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TableCellProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
	children: ReactNode;
	header?: boolean;
	visibility?: string;
	canSort?: boolean;
	sort?: (event: unknown) => void;
	isSorted?: false | SortDirection;
}
