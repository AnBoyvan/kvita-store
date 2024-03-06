import { axiosClassic, axiosWithAuth } from '@/api/interceptors';
import { API } from '@/config/api-routes.config';
import { ITags } from '@/interfaces/admin.interfaces';

export const adminService = {
	async getTags() {
		const response = await axiosClassic.get<string[]>(
			`${API.ADMIN}/tags`,
		);

		return response.data;
	},

	async addTags(data: ITags) {
		const response = await axiosWithAuth.patch<string[]>(
			`${API.ADMIN}/add-tags`,
			data,
		);

		return response.data;
	},

	async removeTags(data: ITags) {
		const response = await axiosWithAuth.patch<string[]>(
			`${API.ADMIN}/remove-tags`,
			data,
		);

		return response.data;
	},
};
