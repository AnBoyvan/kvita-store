import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BadgeProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	variant: 'novelty' | 'promo' | 'count';
	value?: number | null;
}
