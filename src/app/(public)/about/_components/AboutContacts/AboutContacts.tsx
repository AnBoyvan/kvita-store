import Link from 'next/link';

import styles from './AboutContacts.module.scss';

import { Contacts, Htag } from '@/components/Shared';
import { CONTACTS } from '@/configs';

export const AboutContacts: React.FC = () => {
	return (
		<div className={styles.contacts}>
			<Htag tag="h2">Наші контакти</Htag>
			<div className={styles.wrapper}>
				<iframe src={CONTACTS.location.iframe} className={styles.map} />
				<div className={styles.contactsWrapper}>
					<Link
						href={CONTACTS.location.link}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.address}
					>
						{CONTACTS.address}
					</Link>
					<Contacts />
				</div>
			</div>
		</div>
	);
};
