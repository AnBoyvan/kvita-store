import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TableHeadProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {
	children: ReactNode;
}
