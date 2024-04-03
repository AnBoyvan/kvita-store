import { Contacts } from './Contacts/Contacts';
import { Description } from './Description/Description';
import styles from './Footer.module.scss';

import { Navigation } from '@/components';

export const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<Description />
			<Navigation className={styles.nav} />
			<Contacts />
		</footer>
	);
};
