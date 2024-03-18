import Htag from '@/components/Htag/Htag';
import styles from './OrderingSection.module.scss';
import { PAGES } from '@/configs/pages-url.config';
import { LinkButton } from '@/ui/LinkButton/LinkButton';
import { Icon } from '@/ui/Icon/Icon';

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
