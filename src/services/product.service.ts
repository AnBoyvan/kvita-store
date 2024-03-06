import { axiosClassic, axiosWithAuth } from '@/api/interceptors';
import { API } from '@/config/api-routes.config';
import {
	IProduct,
	IProductCreate,
	IProductForMain,
	IProductResponse,
	IProductUpdate,
} from '@/interfaces/product.interfaces';
import { IRemoveResponse } from '@/interfaces/root.interfaces';
import { productFormData } from '@/utils/helpers/convertToFormData';

export const productService = {
	async create(data: IProductCreate) {
		const convertedData = productFormData(data);
		const response = await axiosWithAuth.post<IProduct>(
			`${API.PRODUCTS}`,
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
		const response = await axiosClassic.get<IProductResponse>(
			`${API.PRODUCTS}?${query}`,
		);

		return response.data;
	},

	async forMain() {
		const response = await axiosClassic.get<IProductForMain>(
			`${API.PRODUCTS}/main`,
		);

		return response.data;
	},

	async favorite() {
		const response = await axiosWithAuth.get<IProduct[]>(
			`${API.PRODUCTS}/favorite`,
		);

		return response.data;
	},

	async findById(id: string) {
		const response = await axiosClassic.get<IProduct>(
			`${API.PRODUCTS}/${id}`,
		);

		return response.data;
	},

	async update(id: string, data: IProductUpdate) {
		const convertedData = productFormData(data);
		const response = await axiosWithAuth.patch<IProduct>(
			`${API.PRODUCTS}/${id}`,
			convertedData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			},
		);

		return response.data;
	},

	async removeGalleryImage(id: string, image: string) {
		const response = await axiosWithAuth.patch<{
			product: IProduct;
			message: string;
		}>(`${API.PRODUCTS}/${id}/delete`, { image });

		return response.data;
	},

	async updateFavorite(id: string) {
		const response = await axiosWithAuth.patch<{
			product: IProduct;
			message: string;
		}>(`${API.PRODUCTS}/${id}/favorite`);

		return response.data;
	},

	async remove(id: string) {
		const response = await axiosWithAuth.delete<IRemoveResponse>(
			`${API.PRODUCTS}/${id}`,
		);

		return response.data;
	},
};
