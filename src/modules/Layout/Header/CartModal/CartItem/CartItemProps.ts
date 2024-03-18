import { ICartItem } from '@/interfaces/cart.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CartItemProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	item: ICartItem;
}
