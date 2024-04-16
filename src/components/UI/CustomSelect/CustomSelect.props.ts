import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface CustomSelectProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	options: OptionProps[];
	variant?: 'products' | 'cabinet';
	current?: string;
}

export interface OptionProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	title: string;
}
