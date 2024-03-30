import styles from './ProductCardSkeleton.module.scss';

export const ProductCardSkeleton: React.FC = () => {
	return (
		<li className={styles.card}>
			<div className={styles.image}></div>
			<div className={styles.info}>
				<div className={styles.name}></div>
				<div className={styles.price}></div>
				<div className={styles.button}></div>
			</div>
		</li>
	);
};
