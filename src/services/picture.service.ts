import { axiosClassic, axiosWithAuth } from '@/api/interceptors';
import { API } from '@/config/api-routes.config';
import {
	IPicture,
	IPictureCreate,
} from '@/interfaces/picture.interfaces';
import { IRemoveResponse } from '@/interfaces/root.interfaces';
import { pictureFormData } from '@/utils/helpers/convertToFormData';

export const pictureService = {
	async create(data: IPictureCreate) {
		const convertedData = pictureFormData(data);
		const response = await axiosWithAuth.post<IPicture>(
			`${API.PICTURES}`,
			convertedData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			},
		);

		return response.data;
	},

	async find(query: string = '') {
		const response = await axiosClassic.get<IPicture[]>(
			`${API.PICTURES}?${query}`,
		);

		return response.data;
	},

	async findById(id: string) {
		const response = await axiosClassic.get<IPicture>(
			`${API.PICTURES}/${id}`,
		);

		return response.data;
	},

	async update(id: string, data: IPicture) {
		const response = await axiosWithAuth.patch<IPicture>(
			`${API.PICTURES}/${id}`,
			data,
		);

		return response.data;
	},

	async remove(id: string) {
		const response = await axiosWithAuth.delete<IRemoveResponse>(
			`${API.PICTURES}/${id}`,
		);

		return response.data;
	},
};
