import { getAccessToken, removeTokens } from '@/services/auth-token.service';
import { authService } from '@/services/auth.service';
import axios, { type CreateAxiosDefaults } from 'axios';
import { errorCatch } from './error';
import { toast } from 'sonner';

const options: CreateAxiosDefaults = {
	baseURL: process.env.NEXT_PUBLIC_KVITA_API_URL,
	withCredentials: true,
};

const axiosClassic = axios.create(options);

const axiosWithAuth = axios.create(options);

axiosClassic.interceptors.response.use(
	config => config,
	async error => {
		toast.error(errorCatch(error), { closeButton: false });

		throw error;
	},
);

axiosWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken();

	if (config?.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});

axiosWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config;

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'Токен недійсний' ||
				errorCatch(error) === 'Необхідний токен') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				await authService.refreshToken();
				return axiosWithAuth.request(originalRequest);
			} catch (error) {
				if (errorCatch(error) === 'Токен недійсний') removeTokens();
			}
		}

		toast.error(errorCatch(error), { closeButton: false });

		throw error;
	},
);

export { axiosClassic, axiosWithAuth };
