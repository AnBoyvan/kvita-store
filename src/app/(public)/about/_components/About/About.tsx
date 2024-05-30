import clsx from 'clsx';

import logo from '../../../../../../public/images/kvita-logo.png';
import owner from '../../../../../../public/images/owner.png';

import styles from './About.module.scss';

import { CustomImage, Kvita } from '@/components/Shared';
import { ABOUT } from '@/constants';

export const About: React.FC = () => {
	return (
		<div className={styles.about}>
			<div className={styles.wrapper}>
				<div className={styles.logoWrapper}>
					<div className={styles.logo}>
						<CustomImage src={logo} alt="logo" />
					</div>
					<div className={styles.name}>
						<Kvita />
					</div>
				</div>
				<div className={styles.text}>{ABOUT.greet}</div>
			</div>
			<div className={clsx(styles.wrapper, styles.reverse)}>
				<CustomImage
					src={owner}
					alt="owner"
					className={styles.image}
					sizes="calc(50vw - 24px) 1440px"
				/>
				<div className={styles.textWrapper}>
					<div className={styles.text}>{ABOUT.owner}</div>
					<div className={styles.quote}>{ABOUT.quote}</div>
				</div>
			</div>
			<div className={styles.text}>{ABOUT.ending}</div>
		</div>
	);
};
