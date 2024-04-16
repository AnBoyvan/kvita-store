import type { ButtonProps } from '../Button/Button.props';

import type { IProduct } from '@/interfaces/product.interface';

export interface CartButtonProps extends ButtonProps {
	product: IProduct;
	quantity?: number;
}
