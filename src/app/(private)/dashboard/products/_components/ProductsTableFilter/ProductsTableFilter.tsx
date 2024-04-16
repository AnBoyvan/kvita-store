import styles from './ProductsTableFilter.module.scss';
import type { ProductsTableFilterProps } from './ProductsTableFilter.props';

export const ProductsTableFilter: React.FC<ProductsTableFilterProps> = ({ ...props }) => {
	return (
		<div className={styles.wrapper} {...props}>
			ProductsTableFilter
		</div>
	);
};
