import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface DialogProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDialogElement>, HTMLDialogElement> {
	children: ReactNode;
}
