import styles from './Counter.module.scss';
import { CounterProps } from './Counter.props';

import { Button, Icon } from '@/ui';

export const Counter: React.FC<CounterProps> = ({ count, setCount }) => {
	const handleChangeQuantity = (value: number) => {
		setCount(count + value);
	};

	return (
		<div className={styles.counter}>
			<Button mode="simple" disabled={Boolean(count < 2)} onClick={() => handleChangeQuantity(-1)}>
				<Icon name="Minus" />
			</Button>
			<span className={styles.count}>{count}</span>
			<Button mode="simple" onClick={() => handleChangeQuantity(1)}>
				<Icon name="Plus" />
			</Button>
		</div>
	);
};
