import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface MenuProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	position: 'right' | 'left';
	closed: boolean;
}
