'use client';

import { useCart } from '@/hooks/useCart';
import { authService } from '@/services/auth.service';
import { useUserStore } from '@/store/user.store';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export const CurrentUser: React.FC = () => {
	const session = useSession();
	const { updateUser } = useUserStore();
	const { updateCart } = useCart();
	const [userStatus, setUserStatus] = useState<boolean>(false);

	useEffect(() => {
		if (session.status === 'authenticated' && !userStatus) {
			setUserStatus(true);
		}
	}, [session.status]);

	useEffect(() => {
		if (userStatus) {
			const fetchUser = async () => {
				const current = await authService.current();
				const store = {
					isLoggedIn: true,
					role: current.role,
					favorite: current.favorite,
					_id: current._id,
					name: current.name,
					email: current.email,
					phone: current.phone,
					discount: current.discount,
				};
				updateUser(store);
				updateCart(current.cart);
			};
			fetchUser();
		}
	}, [userStatus]);

	return <></>;
};
