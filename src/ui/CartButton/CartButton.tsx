'use client';

import { createCartItem } from '@/utils/helpers/createCartItem';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { CartButtonProps } from './CartButtonProps';
import { useCart } from '@/hooks/useCart';

export const CartButton: React.FC<CartButtonProps> = ({
	mode,
	variant,
	product,
	quantity,
	...props
}: CartButtonProps) => {
	const { addToCart } = useCart();

	const itemQuantity = quantity ? quantity : 1;

	const handleCartClick = () => {
		const item = createCartItem(product, itemQuantity);
		addToCart(item);
	};

	return (
		<Button mode={mode} variant={variant} onClick={handleCartClick} {...props}>
			В кошик
			<Icon name="ShoppingCart" />
		</Button>
	);
};
