import { IProduct } from '@/interfaces/product.interface';
import { ButtonProps } from '../Button/Button.props';

export interface CartButtonProps extends ButtonProps {
	product: IProduct;
	quantity?: number;
}
