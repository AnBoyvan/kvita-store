import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TableRowProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
	children: ReactNode;
	green?: boolean;
	blue?: boolean;
	red?: boolean;
	gray?: boolean;
	link?: boolean;
}
