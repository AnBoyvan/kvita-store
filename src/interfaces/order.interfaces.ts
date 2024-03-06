import { ICartItem } from './cart-item.interfaces';
import { IBase } from './root.interfaces';

export enum Status {
	New = 'new',
	Active = 'active',
	Completed = 'completed',
	Canceled = 'canceled',
	Rejected = 'rejected',
}

export interface ICustomer {
	id: string;
	name: string;
	email?: string;
	phone: string;
}

export interface IPaymentDetails {
	method: string;
	transactionId: string;
	date: string;
}

export interface IOrder extends IBase {
	publicId: string;
	items: ICartItem[];
	discount?: number;
	discountSum?: number;
	total: number;
	customer: ICustomer;
	status: Status;
	annotation?: string;
	comment?: string;
	delivery?: boolean;
	deliveryAddress?: string;
	paid?: boolean;
	paymentDetails?: IPaymentDetails;
}

export interface IOrderCreate {
	items: ICartItem[];
	discount?: number;
	discountSum?: number;
	total: number;
	customer: ICustomer;
	comment?: string;
	delivery?: boolean;
	deliveryAddress?: string;
}

export interface IOrderUpdate {
	status: Status;
	annotation?: string;
	delivery?: boolean;
	deliveryAddress?: string;
	paid?: boolean;
	paymentDetails?: IPaymentDetails;
}

export interface IOrderResponse {
	result: IOrder[];
	count: number;
}
