import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CartListProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	children: ReactNode;
}
