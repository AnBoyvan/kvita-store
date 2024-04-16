import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ReviewRemoveProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	reviewId: string;
}
