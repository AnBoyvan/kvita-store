import { API } from '@/configs';
import type {
	IUser,
	IUserRemoveResponse,
	IUserResponse,
	IUserUpdate,
	IUserUpdateByAdmin,
	IUserUpdatePassword,
} from '@/interfaces';
import { axiosAuth, axiosClassic } from '@/services/kvita-api';

export const userService = {
	async find(query: string = '') {
		const response = await axiosAuth.get<IUserResponse>(`${API.USERS}?${query}`);

		return response.data;
	},

	async findById(id: string) {
		const response = await axiosAuth.get<IUser>(`${API.USERS}/${id}`);

		return response.data;
	},

	async updateByUser(data: IUserUpdate) {
		const response = await axiosAuth.patch<IUser>(`${API.USERS}/update/own`, data);

		return response.data;
	},

	async updatePassword(data: IUserUpdatePassword) {
		const response = await axiosAuth.patch<{ message: string }>(
			`${API.USERS}/update/password`,
			data,
		);

		return response.data;
	},

	async removeOwn(password: string) {
		const response = await axiosAuth.patch<{ message: string }>(`${API.USERS}/update/remove`, {
			password,
		});

		return response.data;
	},

	async changePasswordRequest(email: string) {
		const response = await axiosClassic.patch<{ message: string }>(`${API.USERS}/password`, {
			email,
		});

		return response.data;
	},

	async changePassword(passwordToken: string, password: string) {
		const response = await axiosClassic.patch<{ message: string }>(
			`${API.USERS}/password/${passwordToken}`,
			{ password },
		);

		return response.data;
	},

	async updateByAdmin(id: string, data: IUserUpdateByAdmin) {
		const response = await axiosAuth.patch<IUser>(`${API.USERS}/update/admin/${id}`, data);

		return response.data;
	},

	async remove(id: string) {
		const response = await axiosAuth.delete<IUserRemoveResponse>(`${API.USERS}/${id}`);

		return response.data;
	},
};
