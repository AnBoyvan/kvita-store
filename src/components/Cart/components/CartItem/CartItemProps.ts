import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ICartItem } from '@/interfaces/cart.interface';

export interface CartItemProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	item: ICartItem;
}
