import { ICartItem, ICartStore } from '@/interfaces/cart.interface';
import { userService } from '@/services/user.service';
import { toast } from 'sonner';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useCartStore = create<ICartStore>()(
	devtools(
		persist(
			(set, get) => ({
				cart: [],
				updateStore: (data: ICartItem[]) => {
					set({ cart: data }, false, 'updateCart');
				},
				addToStore: (data: ICartItem) => {
					set({ cart: [...get().cart, data] }, false, 'addToCart');
				},
				removeFromStore: (id: string) => {
					set(
						{ cart: [...get().cart.filter(({ productId }) => productId !== id)] },
						false,
						'removeFromCart',
					);
				},
				clearStore: () => {
					set({ cart: [] }, false, 'clearCart');
				},
			}),
			{
				name: 'cart',
			},
		),
	),
);
