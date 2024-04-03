import styles from './ProductNutritions.module.scss';
import { ProductNutritionsProps } from './ProductNutritions.props';

export const ProductNutritions: React.FC<ProductNutritionsProps> = ({
	calories,
	proteins,
	fats,
	carbohydrates,
	...props
}) => {
	return (
		<div className={styles.nutritions} {...props}>
			<span className={styles.title}>Поживність &#40;на 100 г&#41;:</span>
			<span className={styles.nutrition}>Калорійність:&nbsp;{calories}кКал</span>
			<span className={styles.nutrition}>Білки:&nbsp;{proteins}г</span>
			<span className={styles.nutrition}>Жири:&nbsp;{fats}г</span>
			<span className={styles.nutrition}>Вуглеводи:&nbsp;{carbohydrates}г</span>
		</div>
	);
};
