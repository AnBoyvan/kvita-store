import type { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

export interface CheckboxProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	variant: 'rect' | 'round' | 'hide';
	children: ReactNode;
}
