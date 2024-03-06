import Image from 'next/image';
import Link from 'next/link';
import styles from './Logo.module.scss';
import logo from '../../../public/pic/logo-icon.png';
import { Kvita } from './Kvita';

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
				/>
			</div>
			<div className={styles.name}>
				<Kvita />
			</div>
		</Link>
	);
};
