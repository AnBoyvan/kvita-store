import styles from './EmptyCart.module.scss';

import { Htag } from '@/components';
import { Icon } from '@/ui';

export const EmptyCart: React.FC = () => {
	return (
		<div className={styles.empty}>
			<Htag tag="h3">Кошик порожній</Htag>
			<Icon name="Frown" size={64} />
		</div>
	);
};
