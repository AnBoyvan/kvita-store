import { axiosAuth, axiosClassic } from '@/api/axios';
import { API } from '@/configs/api-routes.config';
import { IAuthResponse, IRegisterRequest, ILoginForm } from '@/interfaces/auth.interface';
import { IUser } from '@/interfaces/user.interface';


export const authService = {
	async exist(email: string) {
		const response = await axiosClassic.post<boolean>(`${API.AUTH}/exist`, { email });
		return response.data;
	},

	async signIn(email: string) {
		const response = await axiosClassic.post<IAuthResponse>(`${API.AUTH}/signin`, { email });
		return response.data;
	},

	async register(data: IRegisterRequest) {
		const response = await axiosClassic.post<IAuthResponse>(`${API.AUTH}/register`, data);
		return response.data;
	},

	async login(data: ILoginForm) {
		const response = await axiosClassic.post<IAuthResponse>(`${API.AUTH}/login`, data);
		return response.data;
	},

	async current() {
		const response = await axiosAuth.get<IUser>(`${API.AUTH}/current`);
		return response.data;
	},
};
