import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ProductContainerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
}
