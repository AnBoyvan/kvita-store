import {
	DetailedHTMLProps,
	Dispatch,
	HTMLAttributes,
	ReactNode,
	SetStateAction,
} from 'react';

export interface MenuProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
	open: boolean;
	close: Dispatch<SetStateAction<boolean>>;
}
