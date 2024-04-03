'use client';

import { CartButtonProps } from './CartButtonProps';

import { useCart } from '@/hooks';
import { Button, Icon } from '@/ui';
import { createCartItem } from '@/utils/helpers';

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
