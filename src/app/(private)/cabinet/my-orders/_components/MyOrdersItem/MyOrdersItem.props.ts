import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { IOrder } from '@/interfaces';

export interface MyOrdersItemProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	order: IOrder;
}
