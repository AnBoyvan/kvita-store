import { ICartItem } from './cart-item.interfaces';
import { IBase } from './root.interfaces';

export enum Role {
	Customer = 'customer',
	Partner = 'partner',
	Manager = 'manager',
	Admin = 'admin',
	Superuser = 'superuser',
	Banned = 'banned',
	Blocked = 'blocked',
}

export interface IUser extends IBase {
	name: string;
	email: string;
	phone: string;
	role: Role;
	discount: number;
	cart: ICartItem[];
	verify: boolean;
}

export interface IUserUpdateByAdmin {
	role: Role;
	discount: number;
}

export interface IUserUpdate {
	name?: string;
	email?: string;
	phone?: string;
	cart?: ICartItem[];
}

export interface IUserResponse {
	result: IUser[];
	count: number;
}

export interface IUserRemoveResponse {
	user: IUser;
	message: string;
}
