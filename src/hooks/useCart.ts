import { toast } from 'sonner';

import type { ICartItem } from '@/interfaces';
import { userService } from '@/services/kvita-api';
import { useCartStore, useUserStore } from '@/store';

export const useCart = () => {
	const { user } = useUserStore();
	const { isLoggedIn } = user;
	const { cart, updateCartStore, addToCartStore, removeFromCartStore, clearCartStore } =
		useCartStore();

	const updateCart = async (data: ICartItem[]): Promise<void> => {
		const list = data.map(({ productId }) => {
			return productId;
		});
		const addFromStore = cart.filter(item => {
			!list.includes(item.productId);
		});
		const newCart = [...data, ...addFromStore];
		const { cart: userCart } = await userService.updateByUser({ cart: newCart });
		updateCartStore(userCart);
	};

	const addToCart = async (data: ICartItem): Promise<void> => {
		const existedItems = cart.map(({ productId }) => {
			return productId;
		});
		if (existedItems.includes(data.productId)) {
			toast.error(`${data.productName} вже в кошику`, { closeButton: false });
			return;
		}
		if (isLoggedIn) {
			const newCart = [...cart, data];
			await userService.updateByUser({ cart: newCart });
		}
		addToCartStore(data);
		toast.success(`${data.productName} додано до кошика`, { closeButton: false });
	};

	const removeFromCart = async (id: string): Promise<void> => {
		if (isLoggedIn) {
			const newCart = cart.filter(({ productId }) => productId !== id);
			await userService.updateByUser({ cart: newCart });
		}
		removeFromCartStore(id);
	};

	const updateCartItem = async (updatedItem: ICartItem): Promise<void> => {
		const itemIndex = cart.findIndex(item => item.productId === updatedItem.productId);
		if (itemIndex !== -1) {
			const newCart = [...cart];
			newCart[itemIndex] = updatedItem;
			if (isLoggedIn) {
				await userService.updateByUser({ cart: newCart });
			}
			updateCartStore(newCart);
		}
	};

	const clearCart = async (): Promise<void> => {
		if (isLoggedIn) {
			await userService.updateByUser({ cart: [] });
		}
		clearCartStore();
	};

	return { updateCart, addToCart, removeFromCart, clearCart, updateCartItem };
};
