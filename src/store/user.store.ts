import { ICartItem, ICartStore } from '@/interfaces/cart.interface';
import { IUser, IUserState, IUserStore } from '@/interfaces/user.interface';
import { userService } from '@/services/user.service';
import { toast } from 'sonner';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useUserStore = create<IUserStore>()(
	devtools(
		persist(
			(set, get) => ({
				user: {
					isLoggedIn: false,
					role: '',
					favorite: [],
					_id: '',
					name: '',
					email: '',
					phone: '',
					discount: 0,
				},
				updateUser: (data: IUserState) => {
					set({ user: data }, false, 'updateUser');
				},
				updateFavorite: (data: string[]) => {
					set({ user: { ...get().user, favorite: data } }, false, 'updateFavorite');
				},
			}),
			{
				name: 'user',
			},
		),
	),
);
