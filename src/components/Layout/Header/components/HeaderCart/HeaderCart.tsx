import styles from './HeaderCart.module.scss';

import { Cart, Modal } from '@/components/Features';
import { Badge, Icon } from '@/components/Shared';
import { Button } from '@/components/UI';
import { useModal } from '@/hooks';
import { useCartStore } from '@/store';

export const HeaderCart: React.FC = () => {
	const { cart } = useCartStore();
	const { modalRef, openModal } = useModal();

	const handleClick = () => {
		openModal();
	};

	return (
		<>
			<Button mode="simple" className={styles.cartButton} onClick={handleClick}>
				<Icon name="ShoppingCart" />
				{cart.length > 0 && <Badge variant="count" value={cart.length} className={styles.count} />}
			</Button>
			<Modal ref={modalRef} container button>
				<Cart />
			</Modal>
		</>
	);
};
