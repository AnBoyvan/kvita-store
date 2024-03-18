import axios, { type CreateAxiosDefaults } from 'axios';
export const BASE_URL = process.env.NEXT_PUBLIC_KVITA_API_URL;

const options: CreateAxiosDefaults = {
	baseURL: BASE_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
};

export const axiosClassic = axios.create(options);

export const axiosAuth = axios.create(options);
