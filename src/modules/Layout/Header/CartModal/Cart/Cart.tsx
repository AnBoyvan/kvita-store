import { CartProps } from './Cart.props';
import styles from './Cart.module.scss';
import Htag from '@/components/Htag/Htag';
import { Icon } from '@/ui/Icon/Icon';
import { Button } from '@/ui/Button/Button';
import { CartItem } from '../CartItem/CartItem';
import { ModalContext, useModal } from '@/hooks/useModal';
import { useContext } from 'react';

export const Cart: React.FC<CartProps> = ({
	cart,
	orderSum,
	userDiscount,
	setOrdering,
}: CartProps) => {
	const { closeModal } = useContext(ModalContext);

	const list = cart.map(item => <CartItem key={item.productId} item={item} />);

	return (
		<div className={styles.cart}>
			<Htag tag="h2">Кошик</Htag>
			{cart.length > 0 ? (
				<div className={styles.wrapper}>
					<ul className={styles.wrapper}>{list}</ul>

					<div className={styles.priceWrapper}>
						<div className={styles.count}>
							<span className={styles.sumTitle}>Разом</span>
							<span>{orderSum.sum}&nbsp;грн</span>
						</div>
						<div className={styles.count}>
							<span className={styles.sumTitle}>Знижка</span>
							<div className={styles.discount}>
								<span className={styles.sumAccent}>{userDiscount}%</span>
								<span>=</span>
								<span className={styles.sumCount}>{orderSum.discount}&nbsp;грн</span>
							</div>
						</div>
					</div>

					<div className={styles.total}>
						<span className={styles.sumTitle}>Вартість замовлення</span>
						<span className={styles.sumAccent}>{orderSum.total}&nbsp;грн</span>
					</div>

					<div className={styles.buttons}>
						<Button mode="wide" variant="ghost" className={styles.btn} onClick={closeModal}>
							Продовжити покупки
						</Button>
						<div className={styles.total}>
							<span className={styles.sumTitle}>Вартість замовлення</span>
							<span className={styles.sumAccent}>{orderSum.total}&nbsp;грн</span>
						</div>
						<Button
							mode="wide"
							variant="primary"
							className={styles.btn}
							onClick={() => setOrdering(true)}
						>
							Оформити замовлення
						</Button>
					</div>
				</div>
			) : (
				<div className={styles.empty}>
					<Htag tag="h3" className={styles.message}>
						Кошик порожній
					</Htag>
					<Icon name="Frown" size={64} />
				</div>
			)}
		</div>
	);
};
