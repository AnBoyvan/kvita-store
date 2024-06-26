import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface AcceptProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	message: string;
	onAccept: () => void;
	onCancel: () => void;
	type?: 'button' | 'submit' | 'reset';
}
