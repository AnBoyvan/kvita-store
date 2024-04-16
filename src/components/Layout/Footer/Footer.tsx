import styles from './Footer.module.scss';
import { Contacts, Description } from './components';

import { Navigation } from '@/components/Shared';

export const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<Description />
			<Navigation className={styles.nav} />
			<Contacts />
		</footer>
	);
};
