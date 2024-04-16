import type { Dispatch, SetStateAction } from 'react';

import type { ICartItem } from '@/interfaces/cart.interface';

export interface OrderFormProps {
	cart: ICartItem[];
	total: number;
	discountSum: number;
	onBack: Dispatch<SetStateAction<boolean>>;
}
