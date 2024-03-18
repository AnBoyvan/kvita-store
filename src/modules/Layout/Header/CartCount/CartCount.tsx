import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';
import { useCartStore } from '@/store/cart.store';
import { Badge } from '@/ui/Badge/Badge';
import { useEffect } from 'react';
import styles from './CartCount.module.scss';

export const CartCount: React.FC = () => {
	const { user, isLoggedIn } = useAuth();
	const { updateCart } = useCart();
	const { cart } = useCartStore();

	useEffect(() => {
		if (isLoggedIn && user) {
			updateCart(user.cart);
		}
	}, [user]);

	return (
		<>{cart.length > 0 && <Badge variant="count" value={cart.length} className={styles.count} />}</>
	);
};
