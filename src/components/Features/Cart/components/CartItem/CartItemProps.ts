import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { ICartItem } from '@/interfaces/cart.interface';

export interface CartItemProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	item: ICartItem;
}
