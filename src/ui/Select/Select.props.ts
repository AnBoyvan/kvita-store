import {
	DetailedHTMLProps,
	InputHTMLAttributes,
	OptionHTMLAttributes,
	SelectHTMLAttributes,
} from 'react';

export interface SelectProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	options: OptionProps[];
	variant?: 'products' | 'cabinet';
	current?: string;
}

export interface OptionProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	title: string;
}
