import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { IUserState, IUserStore } from '@/interfaces';

const defaultUser = {
	isLoggedIn: false,
	role: '',
	favorite: [],
	_id: '',
	name: '',
	email: '',
	phone: '',
	discount: 0,
};

export const useUserStore = create<IUserStore>()(
	devtools(
		persist(
			(set, get) => ({
				user: { ...defaultUser },
				updateUser: (data: IUserState) => {
					set({ user: data }, false, 'updateUser');
				},
				updateFavorite: (data: string[]) => {
					set({ user: { ...get().user, favorite: data } }, false, 'updateFavorite');
				},
				logout: () => {
					set({ user: { ...defaultUser } }, false, 'updateFavorite');
				},
			}),
			{
				name: 'user',
			},
		),
	),
);
