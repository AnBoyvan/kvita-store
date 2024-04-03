import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { IReview } from '@/interfaces';

export interface ReviewProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	review: IReview;
}
