import { IProduct } from '@/interfaces/product.interface';
import { DetailedHTMLProps, LiHTMLAttributes } from 'react';

export interface ProductCardProps
	extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	product: IProduct;
}
