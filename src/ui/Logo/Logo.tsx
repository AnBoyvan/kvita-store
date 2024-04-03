import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/icons/logo-icon.png';

import { Kvita } from './Kvita';
import styles from './Logo.module.scss';

export const Logo = ({ ...props }): JSX.Element => {
	return (
		<Link href="/" {...props} className={styles.logo}>
			<div className={styles.iconWrapper}>
				<Image
					src={logo}
					fill
					alt="logo"
					style={{
						objectFit: 'contain',
					}}
					sizes="100%"
				/>
			</div>
			<div className={styles.name}>
				<Kvita />
			</div>
		</Link>
	);
};
