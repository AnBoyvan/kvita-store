import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ComposeRejectButtonProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	action: () => void;
	disabled?: boolean;
}
