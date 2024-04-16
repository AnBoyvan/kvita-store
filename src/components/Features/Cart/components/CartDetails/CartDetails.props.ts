import type { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';

import type { ICartSum } from '@/interfaces';

export interface CartDetailsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	orderSum: ICartSum;
	userDiscount: number;
	setOrdering: Dispatch<SetStateAction<boolean>>;
}
