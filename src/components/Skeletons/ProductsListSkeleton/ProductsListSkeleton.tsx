import { ProductCardSkeleton } from '..';
import styles from './ProductsListSkeleton.module.scss';
import { ProductsListSkeletonProps } from './ProductsListSkeleton.props';

export const ProductsListSkeleton: React.FC<ProductsListSkeletonProps> = ({ count, ...props }) => {
	const arr = new Array(count).fill(null);

	const list = arr.map((_, idx) => <ProductCardSkeleton key={idx} />);

	return (
		<ul className={styles.list} {...props}>
			{list}
		</ul>
	);
};
