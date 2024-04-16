import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface AmountProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	title?: string;
	bordered?: boolean;
}
