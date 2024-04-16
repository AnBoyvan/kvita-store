import type { DetailedHTMLProps, LiHTMLAttributes } from 'react';

import type { IMotionProps } from '../../Features/Motion/Motion.props';

import type { IProduct } from '@/interfaces/product.interface';

export interface ProductCardProps
	extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	product: IProduct;
	order?: number;
	motionProps?: IMotionProps;
}
