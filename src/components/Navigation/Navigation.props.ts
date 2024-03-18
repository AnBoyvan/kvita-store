import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface NavigationProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	children?: ReactNode;
	action?: () => void;
}
