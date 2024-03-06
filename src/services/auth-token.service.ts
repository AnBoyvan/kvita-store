import { ITokens } from '@/interfaces/auth.interfaces';
import Cookies from 'js-cookie';

export enum Tokens {
	ACCESS_TOKEN = 'accessToken',
	REFRESH_TOKEN = 'refreshToken',
}

export const getAccessToken = () => {
	const accessToken = Cookies.get(Tokens.ACCESS_TOKEN);
	return accessToken || null;
};

export const getRefreshToken = () => {
	const refreshToken = Cookies.get(Tokens.REFRESH_TOKEN);
	return refreshToken || null;
};

export const saveTokens = (data: ITokens) => {
	Cookies.set(Tokens.ACCESS_TOKEN, data.accessToken);
	Cookies.set(Tokens.REFRESH_TOKEN, data.refreshToken);
};

export const removeTokens = () => {
	Cookies.remove(Tokens.ACCESS_TOKEN);
	Cookies.remove(Tokens.REFRESH_TOKEN);
	localStorage.removeItem('user-store');
};
