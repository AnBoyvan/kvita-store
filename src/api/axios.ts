import axios, { type CreateAxiosDefaults } from 'axios';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
export const BASE_URL = process.env.NEXT_PUBLIC_KVITA_API_URL;

const options: CreateAxiosDefaults = {
	baseURL: BASE_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
};

const axiosClassic = axios.create(options);

const axiosAuth = axios.create(options);

axiosAuth.interceptors.request.use(async config => {
	const session = await getSession();
	const accessToken = session?.user.accessToken;

	if (config?.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});

export { axiosClassic, axiosAuth };
