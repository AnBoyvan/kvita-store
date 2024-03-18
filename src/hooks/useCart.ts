import { useCartStore } from '@/store/cart.store';
import { useAuth } from './useAuth';
import { useAxiosAuth } from './useAuthAxios';
import { ICartItem } from '@/interfaces/cart.interface';
import { userService } from '@/services/user.service';
import { toast } from 'sonner';

export const useCart = () => {
	const { isLoggedIn } = useAuth();
	const axiosAuth = useAxiosAuth();
	const { cart, updateStore, addToStore, removeFromStore, clearStore } = useCartStore();

	const updateCart = async (data: ICartItem[]): Promise<void> => {
		const list = data.map(({ productId }) => {
			return productId;
		});
		const addFromStore = cart.filter(item => {
			!list.includes(item.productId);
		});
		const newCart = [...data, ...addFromStore];
		const { cart: userCart } = await userService.updateByUser({ cart: newCart }, axiosAuth);
		updateStore(userCart);
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
			await userService.updateByUser({ cart: newCart }, axiosAuth);
		}
		addToStore(data);
		toast.success(`${data.productName} додано до кошика`, { closeButton: false });
	};

	const removeFromCart = async (id: string): Promise<void> => {
		if (isLoggedIn) {
			const newCart = cart.filter(({ productId }) => productId !== id);
			await userService.updateByUser({ cart: newCart }, axiosAuth);
		}
		removeFromStore(id);
	};

	const updateCartItem = async (updatedItem: ICartItem): Promise<void> => {
		const itemIndex = cart.findIndex(item => item.productId === updatedItem.productId);
		if (itemIndex !== -1) {
			const newCart = [...cart];
			newCart[itemIndex] = updatedItem;
			if (isLoggedIn) {
				await userService.updateByUser({ cart: newCart }, axiosAuth);
			}
			updateStore(newCart);
		}
	};

	const clearCart = async (): Promise<void> => {
		if (isLoggedIn) {
			await userService.updateByUser({ cart: [] }, axiosAuth);
		}
		clearStore();
	};

	return { updateCart, addToCart, removeFromCart, clearCart, updateCartItem };
};
