import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ComposeAcceptButtonProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	isNew?: boolean;
	disabled?: boolean;
}
