import { DetailedHTMLProps, LiHTMLAttributes } from 'react';

import { IMotionProps } from '../Motion/Motion.props';

import { IProduct } from '@/interfaces/product.interface';

export interface ProductCardProps
	extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	product: IProduct;
	order?: number;
	motionProps?: IMotionProps;
}
