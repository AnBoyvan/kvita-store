import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { IReview } from '@/interfaces';

export interface ReviewProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	review: IReview;
}
