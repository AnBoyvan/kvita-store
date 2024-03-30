import { axiosAuth, axiosClassic } from '@/api/axios';
import { API } from '@/configs/api-routes.config';
import { ITags } from '@/interfaces/admin.interface';

export const adminService = {
	async getTags() {
		const response = await axiosClassic.get<string[]>(`${API.ADMIN}/tags`);

		return response.data;
	},

	async addTags(data: ITags) {
		const response = await axiosAuth.patch<string[]>(`${API.ADMIN}/add-tags`, data);

		return response.data;
	},

	async removeTags(data: ITags) {
		const response = await axiosAuth.patch<string[]>(`${API.ADMIN}/remove-tags`, data);

		return response.data;
	},
};
