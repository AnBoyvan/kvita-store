import { API } from '@/configs';
import type { ITags } from '@/interfaces';
import { axiosAuth, axiosClassic } from '@/services/kvita-api';

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
