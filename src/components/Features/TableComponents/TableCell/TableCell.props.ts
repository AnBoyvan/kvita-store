import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TableCellProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
	children: ReactNode;
	header?: boolean;
	visibility?: string;
}
