import styles from './CartList.module.scss';
import { CartListProps } from './CartList.props';

export const CartList: React.FC<CartListProps> = ({ children }) => {
	return <ul className={styles.list}>{children}</ul>;
};
