import { ICartItem } from '@/interfaces/cart.interface';

export interface OrderFormProps {
	cart: ICartItem[];
	total: number;
	discountSum: number;
}
