import type { IUser } from './user.interface';

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
	phone?: string;
	password: string;
}

export interface ITokens {
	accessToken: string;
	refreshToken: string;
	user: string;
}

export interface IAuthResponse {
	user: IUser;
	accessToken: string;
}
