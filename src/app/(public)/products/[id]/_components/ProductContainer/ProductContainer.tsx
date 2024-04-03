import styles from './ProductContainer.module.scss';
import { ProductContainerProps } from './ProductContainer.props';

export const ProductContainer: React.FC<ProductContainerProps> = ({ children, ...props }) => {
	return (
		<div className={styles.container} {...props}>
			{children}
		</div>
	);
};
