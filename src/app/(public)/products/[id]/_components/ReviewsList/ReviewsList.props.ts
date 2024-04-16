import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ReviewsListProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	productId: string;
}
