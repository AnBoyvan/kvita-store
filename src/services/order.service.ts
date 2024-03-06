import { axiosWithAuth } from '@/api/interceptors';
import { API } from '@/config/api-routes.config';
import {
	IOrder,
	IOrderCreate,
	IOrderResponse,
	IOrderUpdate,
} from '@/interfaces/order.interfaces';
import { IRemoveResponse } from '@/interfaces/root.interfaces';

export const orderService = {
	async create(data: IOrderCreate) {
		const response = await axiosWithAuth.post<IOrder>(
			`${API.ORDERS}`,
			data,
		);

		return response.data;
	},

	async find(query: string = '') {
		const response = await axiosWithAuth.get<IOrderResponse>(
			`${API.ORDERS}?${query}`,
		);

		return response.data;
	},

	async findOwn() {
		const response = await axiosWithAuth.get<IOrder[]>(
			`${API.ORDERS}/own`,
		);

		return response.data;
	},

	async findById(id: string) {
		const response = await axiosWithAuth.get<IOrder>(
			`${API.ORDERS}/${id}`,
		);

		return response.data;
	},

	async update(id: string, data: IOrderUpdate) {
		const response = await axiosWithAuth.patch<IOrder>(
			`${API.ORDERS}/${id}`,
			data,
		);

		return response.data;
	},

	async remove(id: string) {
		const response = await axiosWithAuth.delete<IRemoveResponse>(
			`${API.ORDERS}/${id}`,
		);

		return response.data;
	},
};
