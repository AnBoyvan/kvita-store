import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ContainerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	children: ReactNode;
}
