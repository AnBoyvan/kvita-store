import { IProduct } from '@/interfaces/product.interface';
import { DetailedHTMLProps, LiHTMLAttributes } from 'react';
import { IMotionProps } from '../Motion/Motion.props';

export interface ProductCardProps
	extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	product: IProduct;
	order?: number;
	motionProps?: IMotionProps;
}
