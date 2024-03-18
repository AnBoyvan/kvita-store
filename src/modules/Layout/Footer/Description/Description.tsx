import { Logo } from '@/ui/Logo/Logo';
import styles from './Description.module.scss';
import Link from 'next/link';
import { PAGES } from '@/configs/pages-url.config';
import { CONTACTS } from '@/configs/contacts.config';

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
