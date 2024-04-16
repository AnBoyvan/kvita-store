import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TableProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement> {
	children: ReactNode;
}
