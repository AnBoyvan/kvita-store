import { axiosClassic } from '@/api/axios';
import { API } from '@/configs/api-routes.config';
import { IReview, IReviewCreate } from '@/interfaces/review.interface';
import { IRemoveResponse } from '@/interfaces/root.interface';
import { useAxiosAuth } from '@/hooks/useAuthAxios';
const axiosAuth = useAxiosAuth();

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

	async update(id: string, data: string) {
		const response = await axiosAuth.patch<IReview>(`${API.REWIEWS}/${id}`, { data });

		return response.data;
	},

	async remove(id: string) {
		const response = await axiosAuth.delete<IRemoveResponse>(`${API.REWIEWS}/${id}`);

		return response.data;
	},
};
