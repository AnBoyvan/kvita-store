import styles from './ComposeNutrients.module.scss';
import type { ComposeNutrientsProps } from './ComposeNutrients.props';

import { Input } from '@/components/UI';

export const ComposeNutrients: React.FC<ComposeNutrientsProps> = ({
	watch,
	register,
	errors,
	...props
}) => {
	return (
		<div className={styles.nutrients} {...props}>
			<div className={styles.wrapper}>
				<Input
					label="Калорії"
					{...register('calories')}
					type="number"
					error={errors.calories}
					value={watch('calories')}
					min={0}
				/>
				<Input
					label="Білки"
					{...register('proteins')}
					type="number"
					error={errors.proteins}
					value={watch('proteins')}
					min={0}
				/>
			</div>
			<div className={styles.wrapper}>
				<Input
					label="Жири"
					{...register('fats')}
					type="number"
					error={errors.fats}
					value={watch('fats')}
					min={0}
				/>
				<Input
					label="Вуглеводи"
					{...register('carbohydrates')}
					type="number"
					error={errors.carbohydrates}
					value={watch('carbohydrates')}
					min={0}
				/>
			</div>
		</div>
	);
};
