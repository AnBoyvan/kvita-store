import styles from './Counter.module.scss';
import type { CounterProps } from './Counter.props';

import { Icon } from '@/components/Shared';
import { Button } from '@/components/UI';

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
