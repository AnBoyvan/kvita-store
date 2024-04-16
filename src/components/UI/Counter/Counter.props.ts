import type { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';

export interface CounterProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLElement> {
	count: number;
	setCount: Dispatch<SetStateAction<number>>;
}
