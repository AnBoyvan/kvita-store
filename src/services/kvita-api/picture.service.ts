import { API } from '@/configs';
import type { IPicture, IPictureCreate, IRemoveResponse } from '@/interfaces';
import { axiosAuth, axiosClassic } from '@/services/kvita-api';
import { pictureFormData } from '@/utils/helpers';

export const pictureService = {
	async create(data: IPictureCreate) {
		const convertedData = pictureFormData(data);
		const response = await axiosAuth.post<IPicture>(`${API.PICTURES}`, convertedData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});

		return response.data;
	},

	async find(query: string = '') {
		const response = await axiosClassic.get<IPicture[]>(`${API.PICTURES}?${query}`);

		return response.data;
	},

	async findById(id: string) {
		const response = await axiosClassic.get<IPicture>(`${API.PICTURES}/${id}`);

		return response.data;
	},

	async update(id: string, data: IPicture) {
		const response = await axiosAuth.patch<IPicture>(`${API.PICTURES}/${id}`, data);

		return response.data;
	},

	async remove(id: string) {
		const response = await axiosAuth.delete<IRemoveResponse>(`${API.PICTURES}/${id}`);

		return response.data;
	},
};
