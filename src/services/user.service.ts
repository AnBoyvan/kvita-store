import { axiosClassic } from '@/api/axios';
import { API } from '@/configs/api-routes.config';
import {
	IUser,
	IUserRemoveResponse,
	IUserResponse,
	IUserUpdate,
	IUserUpdateByAdmin,
} from '@/interfaces/user.interface';
import { AxiosInstance } from 'axios';

export const userService = {
	// async find(query: string) {
	// 	const response = await axiosAuth.get<IUserResponse>(`${API.USERS}?${query}`);

	// 	return response.data;
	// },

	// async findById(id: string) {
	// 	const response = await axiosAuth.get<IUser>(`${API.USERS}/${id}`);

	// 	return response.data;
	// },

	async updateByUser(data: IUserUpdate, instance: AxiosInstance) {
		const response = await instance.patch<IUser>(`${API.USERS}`, data);

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

	// async updateByAdmin(id: string, data: IUserUpdateByAdmin) {
	// 	const response = await axiosAuth.patch<IUser>(`${API.USERS}/${id}`, data);

	// 	return response.data;
	// },

	// async remove(id: string) {
	// 	const response = await axiosAuth.delete<IUserRemoveResponse>(`${API.USERS}/${id}`);

	// 	return response.data;
	// },
};
