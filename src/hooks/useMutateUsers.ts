import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signOut } from 'next-auth/react';
import { toast } from 'sonner';

import type { IUserUpdate, IUserUpdateByAdmin, IUserUpdatePassword } from '@/interfaces';
import { userService } from '@/services/kvita-api';
import { useCartStore, useUserStore } from '@/store';
import { errorCatch } from '@/utils/helpers';

export const useMutateUsers = () => {
	const queryClient = useQueryClient();
	const { user: userState, updateUser, logout } = useUserStore();
	const { clearCartStore } = useCartStore();

	const {
		mutate: updateByAdmin,
		isSuccess: updateByAdminSuccess,
		isPending: updatingByAdmin,
		isError: updateByAdminError,
	} = useMutation({
		mutationFn: ({ id, data }: { id: string; data: IUserUpdateByAdmin }) =>
			userService.updateByAdmin(id, data),
		mutationKey: ['users-updateByAdmin'],
		onSuccess: user => {
			queryClient.invalidateQueries({ queryKey: ['users'] });
			toast.success(`Дані користувача ${user.name} змінено`, { closeButton: false });
		},
		onError: err => {
			toast.error(errorCatch(err), { closeButton: false });
		},
	});

	const {
		mutate: updateByUser,
		isSuccess: updateByUserSuccess,
		isPending: updatingByUser,
		isError: updateByUserError,
	} = useMutation({
		mutationFn: (data: IUserUpdate) => userService.updateByUser(data),
		mutationKey: ['users-updateByUser'],
		onSuccess: user => {
			queryClient.invalidateQueries({ queryKey: ['users'] });
			updateUser({ ...userState, name: user.name, email: user.email, phone: user.phone });
			toast.success(`Особисто інформацію змінено`, { closeButton: false });
		},
		onError: err => {
			toast.error(errorCatch(err), { closeButton: false });
		},
	});

	const {
		mutate: updatePassword,
		isSuccess: updatePasswordSuccess,
		isPending: updatingPassword,
		isError: updatePasswordError,
	} = useMutation({
		mutationFn: (data: IUserUpdatePassword) => userService.updatePassword(data),
		mutationKey: ['users-updatePassword'],
		onSuccess: ({ message }) => {
			toast.success(message, { closeButton: false });
		},
		onError: err => {
			toast.error(errorCatch(err), { closeButton: false });
		},
	});

	const {
		mutate: removeAccount,
		isSuccess: removeAccountSuccess,
		isPending: removingAccount,
		isError: removeAccountError,
	} = useMutation({
		mutationFn: ({ password }: { password: string }) => userService.removeOwn(password),
		mutationKey: ['users-removeAccount'],
		onSuccess: async ({ message }) => {
			await signOut({ callbackUrl: '/' });
			logout();
			clearCartStore();
			toast.success(message, { closeButton: false });
		},
		onError: err => {
			toast.error(errorCatch(err), { closeButton: false });
		},
	});

	return {
		updateByAdmin,
		updateByAdminSuccess,
		updatingByAdmin,
		updateByAdminError,
		updateByUser,
		updateByUserSuccess,
		updatingByUser,
		updateByUserError,
		updatePassword,
		updatePasswordSuccess,
		updatingPassword,
		updatePasswordError,
		removeAccount,
		removeAccountSuccess,
		removingAccount,
		removeAccountError,
	};
};
