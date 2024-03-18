import { BASE_URL, axiosClassic } from '@/api/axios';
import {
	IProduct,
	IProductCreate,
	IProductsForMain,
	IProductResponse,
	IProductUpdate,
} from '@/interfaces/product.interface';
import { IRemoveResponse } from '@/interfaces/root.interface';
import { productFormData } from '@/utils/helpers/convertToFormData';
import { useAxiosAuth } from '@/hooks/useAuthAxios';
import { API } from '@/configs/api-routes.config';
import { AxiosInstance } from 'axios';
import next from 'next';

export const productService = {
	// async create(data: IProductCreate) {
	// 	const convertedData = productFormData(data);
	// 	const response = await axiosAuth.post<IProduct>(`${API.PRODUCTS}`, convertedData, {
	// 		headers: {
	// 			'Content-Type': 'multipart/form-data',
	// 		},
	// 	});

	// 	return response.data;
	// },

	async find(query: string = '') {
		const response = await axiosClassic.get<IProductResponse>(`${API.PRODUCTS}?${query}`);

		return response.data;
	},

	// async favorite() {
	// 	const response = await axiosAuth.get<IProduct[]>(`${API.PRODUCTS}/favorite`);

	// 	return response.data;
	// },

	async findById(id: string) {
		const response = await axiosClassic.get<IProduct>(`${API.PRODUCTS}/${id}`);

		return response.data;
	},

	// async update(id: string, data: IProductUpdate) {
	// 	const convertedData = productFormData(data);
	// 	const response = await axiosAuth.patch<IProduct>(`${API.PRODUCTS}/${id}`, convertedData, {
	// 		headers: {
	// 			'Content-Type': 'multipart/form-data',
	// 		},
	// 	});

	// 	return response.data;
	// },

	// async removeGalleryImage(id: string, image: string) {
	// 	const response = await axiosAuth.patch<{
	// 		product: IProduct;
	// 		message: string;
	// 	}>(`${API.PRODUCTS}/${id}/delete`, { image });

	// 	return response.data;
	// },

	async updateFavorite(id: string, instance: AxiosInstance) {
		const response = await instance.patch<{
			product: IProduct;
			message: string;
		}>(`${API.PRODUCTS}/${id}/favorite`);

		return response.data;
	},

	// async remove(id: string) {
	// 	const response = await axiosAuth.delete<IRemoveResponse>(`${API.PRODUCTS}/${id}`);

	// 	return response.data;
	// },

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
