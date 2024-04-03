import Link from 'next/link';

import styles from './Description.module.scss';

import { CONTACTS, PAGES } from '@/configs';
import { Logo } from '@/ui';

export const Description: React.FC = () => {
	return (
		<div className={styles.description}>
			<Logo />
			<Link href={PAGES.ABOUT} className={styles.title}>
				Кондитерська студія “КВіТа”
			</Link>
			<Link
				href={CONTACTS.location}
				target="_blank"
				rel="noopener noreferrer"
				className={styles.address}
			>
				{CONTACTS.address}
			</Link>
		</div>
	);
};
