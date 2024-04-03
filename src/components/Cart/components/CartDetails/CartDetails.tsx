import { useContext } from 'react';

import styles from './CartDetails.module.scss';
import { CartDetailsProps } from './CartDetails.props';

import { Amount } from '@/components';
import { ModalContext } from '@/hooks';
import { Button } from '@/ui';

export const CartDetails: React.FC<CartDetailsProps> = ({
	orderSum,
	userDiscount,
	setOrdering,
}) => {
	const { closeModal } = useContext(ModalContext);
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
				<Button mode="wide" variant="ghost" className={styles.btn} onClick={closeModal}>
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
