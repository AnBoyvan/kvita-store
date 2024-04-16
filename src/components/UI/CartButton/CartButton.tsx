'use client';

import { CartButtonProps } from './CartButtonProps';

import { Icon } from '@/components/Shared';
import { Button } from '@/components/UI';
import { useCart } from '@/hooks';
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
