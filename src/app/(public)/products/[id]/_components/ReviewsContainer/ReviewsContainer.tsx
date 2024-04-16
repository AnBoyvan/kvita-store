import styles from './ReviewsContainer.module.scss';
import type { ReviewsContainerProps } from './ReviewsContainer.props';

import { Htag } from '@/components/Shared';

export const ReviewsContainer: React.FC<ReviewsContainerProps> = ({ children, ...props }) => {
	return (
		<div className={styles.container} {...props}>
			<Htag tag="h2">Відгуки</Htag>
			<div className={styles.wrapper}>{children}</div>
		</div>
	);
};
