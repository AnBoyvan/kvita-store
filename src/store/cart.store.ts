import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { ICartItem, ICartStore } from '@/interfaces';

export const useCartStore = create<ICartStore>()(
	devtools(
		persist(
			(set, get) => ({
				cart: [],
				updateCartStore: (data: ICartItem[]) => {
					set({ cart: data }, false, 'updateCart');
				},
				addToCartStore: (data: ICartItem) => {
					set({ cart: [...get().cart, data] }, false, 'addToCart');
				},
				removeFromCartStore: (id: string) => {
					set(
						{ cart: [...get().cart.filter(({ productId }) => productId !== id)] },
						false,
						'removeFromCart',
					);
				},
				clearCartStore: () => {
					set({ cart: [] }, false, 'clearCart');
				},
			}),
			{
				name: 'cart',
			},
		),
	),
);
