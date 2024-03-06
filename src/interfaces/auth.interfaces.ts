import { IUser, IUserUpdate } from './user.interfaces';

export interface IRegisterForm extends IRegisterRequest {
	confirmPassword: string;
}
export interface ILoginForm {
	login: string;
	password: string;
}
export interface IRegisterRequest {
	name: string;
	email: string;
	phone: string;
	password: string;
}

export interface ITokens {
	accessToken: string;
	refreshToken: string;
}

export interface IAuthResponse extends ITokens {
	user: IUser;
}

export interface IAuthStore {
	user: IUser | {};
	login: (data: ILoginForm) => Promise<void>;
	register: (data: IRegisterForm) => Promise<void>;
	updateUser: (user: IUser) => Promise<void>;
	logout: () => void;
}
