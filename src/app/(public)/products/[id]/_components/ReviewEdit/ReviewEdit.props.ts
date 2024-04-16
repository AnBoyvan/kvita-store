import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { IReview } from '@/interfaces';

export interface ReviewEditProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	review: IReview;
	productId: string;
}
