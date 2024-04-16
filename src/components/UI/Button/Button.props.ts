import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children?: ReactNode;
	mode: 'default' | 'wide' | 'round' | 'simple' | 'link';
	variant?: 'primary' | 'secondary' | 'ghost';
	active?: boolean;
}
