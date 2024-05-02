import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ModalProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDialogElement>, HTMLDialogElement> {
	children: ReactNode;
	centered?: boolean;
	container?: boolean;
	button?: boolean;
	onClose?: () => void;
}
