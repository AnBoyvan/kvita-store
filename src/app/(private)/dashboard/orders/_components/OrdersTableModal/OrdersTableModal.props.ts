import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { IOrder } from '@/interfaces';

export interface OrdersTableModalProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	order: IOrder;
	action: () => void;
}
