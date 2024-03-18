import Image from 'next/image';
import google from '../../../../public/pic/google.png';
import { Button } from '@/ui/Button/Button';
import styles from './GoogleButton.module.scss';
import { signIn } from 'next-auth/react';
import { usePathname } from 'next/navigation';

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
