import Link from 'next/link';

import styles from './Footer.module.scss';

import { Contacts, Logo, Navigation } from '@/components/Shared';
import { CONTACTS, PAGES } from '@/configs';

export const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.description}>
				<Logo />
				<Link href={PAGES.ABOUT} className={styles.title}>
					Кондитерська студія “КВіТа”
				</Link>
				<Link
					href={CONTACTS.location.link}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.address}
				>
					{CONTACTS.address}
				</Link>
			</div>
			<Navigation className={styles.nav} />
			<Contacts />
		</footer>
	);
};
