import { Navigation } from '@/components/Navigation/Navigation';
import styles from './Footer.module.scss';
import { Description } from './Description/Description';
import { Contacts } from './Contacts/Contacts';

export const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<Description />
			<Navigation className={styles.nav} />
			<Contacts />
		</footer>
	);
};
