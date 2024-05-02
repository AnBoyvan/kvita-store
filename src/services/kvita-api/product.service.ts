import { API } from '@/configs';
import type {
	IProduct,
	IProductCreate,
	IProductResponse,
	IProductUpdate,
	IProductsForMain,
	IRemoveResponse,
} from '@/interfaces';
import { BASE_URL, axiosAuth, axiosClassic } from '@/services/kvita-api';
import { productFormData } from '@/utils/helpers';

export const productService = {
	async create(data: IProductCreate) {
		const convertedData = productFormData(data);
		const response = await axiosAuth.post<IProduct>(`${API.PRODUCTS}`, convertedData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});

		return response.data;
	},

	async find(query: string = '') {
		const response = await axiosClassic.get<IProductResponse>(`${API.PRODUCTS}?${query}`);

		return response.data;
	},

	async favorite() {
		const response = await axiosAuth.get<IProduct[]>(`${API.PRODUCTS}/favorite`);

		return response.data;
	},

	async findById(id: string) {
		const response = await axiosClassic.get<IProduct>(`${API.PRODUCTS}/${id}`);
		return response.data;
	},

	async update(id: string, data: IProductUpdate) {
		const convertedData = productFormData(data);
		const response = await axiosAuth.patch<IProduct>(`${API.PRODUCTS}/${id}`, convertedData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});

		return response.data;
	},

	async updateFavorite(id: string) {
		const response = await axiosAuth.patch<{
			product: IProduct;
			message: string;
			userFavorites: string[];
		}>(`${API.PRODUCTS}/${id}/favorite`);

		return response.data;
	},

	async remove(id: string) {
		const response = await axiosAuth.delete<IRemoveResponse>(`${API.PRODUCTS}/${id}`);

		return response.data;
	},

	async forMain(): Promise<IProductsForMain> {
		const response = await fetch(`${BASE_URL}` + `${API.PRODUCTS}` + '/main', {
			next: {
				revalidate: 10,
			},
		});

		if (!response.ok) throw new Error('Помилка сервера');

		return response.json();
	},
};
