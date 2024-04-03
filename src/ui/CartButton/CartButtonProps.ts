import { ButtonProps } from '../Button/Button.props';

import { IProduct } from '@/interfaces/product.interface';

export interface CartButtonProps extends ButtonProps {
	product: IProduct;
	quantity?: number;
}
