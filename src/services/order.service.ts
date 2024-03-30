import { API } from '@/configs/api-routes.config';
import { IOrder, IOrderCreate, IOrderResponse, IOrderUpdate } from '@/interfaces/order.interface';
import { AxiosInstance } from 'axios';
import { IRemoveResponse } from '@/interfaces/root.interface';
import { axiosAuth } from '@/api/axios';

export const orderService = {
	async create(data: IOrderCreate) {
		const response = await axiosAuth.post<IOrder>(`${API.ORDERS}`, data);

		return response.data;
	},

	async find(query: string = '') {
		const response = await axiosAuth.get<IOrderResponse>(`${API.ORDERS}?${query}`);

		return response.data;
	},

	async findOwn() {
		const response = await axiosAuth.get<IOrder[]>(`${API.ORDERS}/own`);

		return response.data;
	},

	async findById(id: string) {
		const response = await axiosAuth.get<IOrder>(`${API.ORDERS}/${id}`);

		return response.data;
	},

	async update(id: string, data: IOrderUpdate) {
		const response = await axiosAuth.patch<IOrder>(`${API.ORDERS}/${id}`, data);

		return response.data;
	},

	async remove(id: string) {
		const response = await axiosAuth.delete<IRemoveResponse>(`${API.ORDERS}/${id}`);

		return response.data;
	},
};
