import styles from './ProductInfo.module.scss';
import { ProductInfoProps } from './ProductInfo.props';

import { Htag } from '@/components';
import { LikeButton } from '@/ui';

export const ProductInfo: React.FC<ProductInfoProps> = ({ _id, name, description, ...props }) => {
	return (
		<div className={styles.info} {...props}>
			<Htag tag="h1" className={styles.name}>
				{name}
				<LikeButton productId={_id} className={styles.like} />
			</Htag>
			<div className={styles.description}>{description}</div>
		</div>
	);
};
