import Link from 'next/link';

import styles from './CallButton.module.scss';

import { Icon } from '@/components/Shared';
import { CONTACTS } from '@/configs';

export const CallButton: React.FC = () => {
	return (
		<Link href={`tel:${CONTACTS.phone}`} className={styles.link}>
			<span className={styles.ping}></span>
			{/* <div className={styles.button}> */}
			<Icon name="Phone" size={32} />
			{/* </div> */}
		</Link>
	);
};
