import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import google from '../../../public/icons/google.png';

import styles from './GoogleButton.module.scss';

import { Button } from '@/components/UI';

export const GoogleButton = () => {
	const pathname = usePathname();

	const handleClick = () => {
		signIn('google', { callbackUrl: pathname });
	};

	return (
		<Button mode="wide" variant="ghost" className={styles.button} onClick={handleClick}>
			<div className={styles.imgWrapper}>
				<Image
					src={google}
					fill
					alt="google"
					style={{
						objectFit: 'contain',
					}}
					sizes="100%"
				/>
			</div>
			Вхід з Google
		</Button>
	);
};
