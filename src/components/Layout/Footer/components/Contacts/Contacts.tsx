import clsx from 'clsx';
import Link from 'next/link';

import styles from './Contacts.module.scss';

import { Icon, TelegramLogo, ViberLogo } from '@/components/Shared';
import { CONTACTS } from '@/configs';

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
				<Link
					href={CONTACTS.viber_desktop}
					target="_blank"
					rel="noopener noreferrer"
					className={clsx(styles.link, styles.desktop)}
				>
					<ViberLogo />
				</Link>
				<Link
					href={CONTACTS.viber_mobile}
					target="_blank"
					rel="noopener noreferrer"
					className={clsx(styles.link, styles.mobile)}
				>
					<ViberLogo />
				</Link>
			</div>
		</div>
	);
};
