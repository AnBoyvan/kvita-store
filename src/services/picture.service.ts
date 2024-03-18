import { axiosClassic } from '@/api/axios';
import { API } from '@/configs/api-routes.config';
import { IPicture, IPictureCreate } from '@/interfaces/picture.interface';
import { IRemoveResponse } from '@/interfaces/root.interface';
import { pictureFormData } from '@/utils/helpers/convertToFormData';
import { useAxiosAuth } from '@/hooks/useAuthAxios';

const axiosAuth = useAxiosAuth();

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
