import { useCartStore } from '@/store/cart.store';
import { Badge } from '@/ui/Badge/Badge';
import styles from './CartCount.module.scss';

export const CartCount: React.FC = () => {
	const { cart } = useCartStore();

	return (
		<>{cart.length > 0 && <Badge variant="count" value={cart.length} className={styles.count} />}</>
	);
};
