'use client';

import { axiosAuth } from '@/api/axios';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export const useAxiosAuth = () => {
	const { data: session } = useSession();

	useEffect(() => {
		const requestIntercept = axiosAuth.interceptors.request.use(
			config => {
				if (!config.headers['Authorization']) {
					config.headers['Authorization'] = `Bearer ${session?.user.accessToken}`;
				}
				return config;
			},
			error => Promise.reject(error),
		);

		return () => {
			axiosAuth.interceptors.request.eject(requestIntercept);
		};
	}, [session]);

	return axiosAuth;
};
