import type { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface LinkButtonProps
	extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	children?: ReactNode;
	mode: 'default' | 'wide' | 'round' | 'simple';
	variant?: 'primary' | 'secondary' | 'ghost';
	link: string;
}
