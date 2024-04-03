import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { IReview } from '@/interfaces';

export interface ReviewFormProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
	productId: string;
	title: string;
	button: string;
	review?: IReview;
	update?: () => void;
}
