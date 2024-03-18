import { useSession } from 'next-auth/react';

export const useAuth = () => {
	const { data } = useSession();
	const user = data?.user;
	const isLoggedIn = data ? true : false;
	return { isLoggedIn, user };
};
