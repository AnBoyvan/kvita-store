import styles from './OrderingSection.module.scss';

import { Htag } from '@/components';
import { PAGES } from '@/configs';
import { Icon, LinkButton } from '@/ui';

export const OrderingSection: React.FC = () => {
	return (
		<section className={styles.section}>
			<Htag tag="h2" className={styles.title}>
				Створимо ідеальний торт та десерти для Вас
			</Htag>
			<LinkButton link={`${PAGES.ORDERING}`} mode="default" variant="primary">
				<span>Замовити</span>
				<Icon name="ChevronsRight" />
			</LinkButton>
		</section>
	);
};
