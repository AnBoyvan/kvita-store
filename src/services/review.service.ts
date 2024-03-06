import { axiosClassic, axiosWithAuth } from '@/api/interceptors';
import { API } from '@/config/api-routes.config';
import {
	IReview,
	IReviewCreate,
} from '@/interfaces/review.interfaces';
import { IRemoveResponse } from '@/interfaces/root.interfaces';

export const reviewService = {
	async create(data: IReviewCreate) {
		const response = await axiosWithAuth.post<IReview>(
			`${API.REWIEWS}`,
			data,
		);

		return response.data;
	},

	async find(query: string) {
		const response = await axiosClassic.get<IReview[]>(
			`${API.REWIEWS}?${query}`,
		);

		return response.data;
	},

	async findById(id: string) {
		const response = await axiosClassic.get<IReview>(
			`${API.REWIEWS}/${id}`,
		);

		return response.data;
	},

	async update(id: string, data: string) {
		const response = await axiosWithAuth.patch<IReview>(
			`${API.REWIEWS}/${id}`,
			{ data },
		);

		return response.data;
	},

	async remove(id: string) {
		const response = await axiosWithAuth.delete<IRemoveResponse>(
			`${API.REWIEWS}/${id}`,
		);

		return response.data;
	},
};
