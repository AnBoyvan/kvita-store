import { API } from '@/configs';
import type { IRemoveResponse, IReview, IReviewCreate } from '@/interfaces';
import { axiosAuth, axiosClassic } from '@/services/kvita-api';

export const reviewService = {
	async create(data: IReviewCreate) {
		const response = await axiosAuth.post<IReview>(`${API.REWIEWS}`, data);

		return response.data;
	},

	async find(query: string) {
		const response = await axiosClassic.get<IReview[]>(`${API.REWIEWS}?${query}`);

		return response.data;
	},

	async findById(id: string) {
		const response = await axiosClassic.get<IReview>(`${API.REWIEWS}/${id}`);

		return response.data;
	},

	async update(id: string, comment: string) {
		const response = await axiosAuth.patch<IReview>(`${API.REWIEWS}/${id}`, { comment });

		return response.data;
	},

	async remove(id: string) {
		const response = await axiosAuth.delete<IRemoveResponse>(`${API.REWIEWS}/${id}`);

		return response.data;
	},
};
