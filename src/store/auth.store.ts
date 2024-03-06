import { IAuthStore, ILoginForm, IRegisterForm } from '@/interfaces/auth.interfaces';
import { IUserUpdate } from '@/interfaces/user.interfaces';
import { authService } from '@/services/auth.service';
import { userService } from '@/services/user.service';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useAuth = create<IAuthStore>()(
	devtools(
		persist(
			set => ({
				user: {},
				login: async (data: ILoginForm) => {
					const user = await authService.login(data);
					set({ user }, false, 'login');
				},
				register: async (data: IRegisterForm) => {
					const user = await authService.register(data);
					set({ user }, false, 'register');
				},
				updateUser: async (data: IUserUpdate) => {
					const user = await userService.updateByUser(data);
					set({ user }, false, 'updateUser');
				},
				logout: () => set({ user: {} }, false, 'logout'),
			}),
			{
				name: 'user-store',
			},
		),
	),
);
