import { API } from '@/configs';
import type { IPicture, IPictureCreate, IPictureResponse, IRemoveResponse } from '@/interfaces';
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

	async find({ queryKey, pageParam }: { queryKey: string[]; pageParam: number }) {
		const tags = queryKey[1];

		const response = await axiosClassic.get<IPictureResponse>(
			`${API.PICTURES}?${tags ? `tags=${tags}` : ''}&page=${pageParam}&limit=12`,
		);

		return response.data.result;
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
