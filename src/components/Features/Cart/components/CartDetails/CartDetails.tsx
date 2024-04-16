import styles from './CartDetails.module.scss';
import type { CartDetailsProps } from './CartDetails.props';

import { Amount } from '@/components/Shared';
import { Button } from '@/components/UI';
import { useModal } from '@/hooks';

export const CartDetails: React.FC<CartDetailsProps> = ({
	orderSum,
	userDiscount,
	setOrdering,
}) => {
	const { closeModal } = useModal();

	const handleContinue = () => {
		closeModal();
		setOrdering(false);
	};

	return (
		<>
			<div className={styles.details}>
				<Amount title="Разом" bordered={true}>
					<span>{orderSum.sum}&nbsp;грн</span>
				</Amount>
				<Amount title="Знижка" bordered={true}>
					<b>{userDiscount}%</b>
					<span>=</span>
					<span>{orderSum.discount}&nbsp;грн</span>
				</Amount>
			</div>

			<Amount title="Вартість замовлення" bordered={true} className={styles.total}>
				<span>{orderSum.total}&nbsp;грн</span>
			</Amount>

			<div className={styles.summary}>
				<Button mode="wide" variant="ghost" className={styles.btn} onClick={handleContinue}>
					Продовжити покупки
				</Button>
				<Amount title="Вартість замовлення" bordered={true} className={styles.total}>
					<span>{orderSum.total}&nbsp;грн</span>
				</Amount>
				<Button
					mode="wide"
					variant="primary"
					className={styles.btn}
					onClick={() => setOrdering(true)}
				>
					Оформити замовлення
				</Button>
			</div>
		</>
	);
};
