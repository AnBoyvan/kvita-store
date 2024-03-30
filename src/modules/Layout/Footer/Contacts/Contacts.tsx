import Link from 'next/link';
import styles from './Contacts.module.scss';
import { CONTACTS } from '@/configs/contacts.config';
import { Icon } from '@/ui/Icon/Icon';
import { TelegramLogo } from './TelegramLogo';

export const Contacts: React.FC = () => {
	return (
		<div className={styles.contacts}>
			<Link href={`tel:${CONTACTS.phone}`} className={styles.phone}>
				<Icon name="Smartphone" />
				<div>{CONTACTS.phone}</div>
			</Link>
			<div className={styles.social}>
				<Link
					href={CONTACTS.instagram}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.link}
				>
					<Icon name="Instagram" />
				</Link>
				<Link
					href={CONTACTS.telegram}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.link}
				>
					<TelegramLogo />
				</Link>
				<Link
					href={CONTACTS.facebook}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.link}
				>
					<Icon name="Facebook" />
				</Link>
			</div>
		</div>
	);
};