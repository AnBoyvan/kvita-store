import styles from './ProductsFilterSkeleton.module.scss';

export const ProductsFilterSkeleton: React.FC = () => {
	return (
		<div className={styles.filter}>
			<div className={styles.option}>
				<div className={styles.text}></div>
			</div>
			<div className={styles.option}>
				<div className={styles.text}></div>
			</div>
		</div>
	);
};
