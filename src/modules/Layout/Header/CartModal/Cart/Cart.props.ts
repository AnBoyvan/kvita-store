import { ICartItem } from '@/interfaces/cart.interface';
import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';
import { ICartSum } from '../CartModal';

export interface CartProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	cart: ICartItem[];
	orderSum: ICartSum;
	userDiscount?: number;
	setOrdering: Dispatch<SetStateAction<boolean>>;
}
