import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import type { IConfig } from '@/interfaces';

export interface CustomSelectProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	options: IConfig[];
	variant?: 'products' | 'cabinet';
	current?: string;
}

export interface OptionProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	title: string;
}
