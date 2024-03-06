import { axiosClassic, axiosWithAuth } from '@/api/interceptors';
import { API } from '@/config/api-routes.config';
import { IAuthResponse, ILoginForm, IRegisterRequest } from '@/interfaces/auth.interfaces';
import { getRefreshToken, removeTokens, saveTokens } from './auth-token.service';

export const authService = {
	async register(data: IRegisterRequest) {
		const response = await axiosClassic.post<IAuthResponse>(`${API.AUTH}/register`, data);

		const { user, ...rest } = response.data;

		if (response.data.accessToken) {
			saveTokens(rest);
		}

		return user;
	},

	async login(data: ILoginForm) {
		const response = await axiosClassic.post<IAuthResponse>(`${API.AUTH}/login`, data);

		const { user, ...rest } = response.data;

		if (response.data.accessToken) {
			saveTokens(rest);
		}

		return user;
	},

	async refreshToken() {
		const refreshToken = getRefreshToken();
		const response = await axiosClassic.post<IAuthResponse>(`${API.AUTH}/access-token`, {
			refreshToken,
		});

		const { user, ...rest } = response.data;

		if (response.data.accessToken) {
			saveTokens(rest);
		}

		return user;
	},
};
