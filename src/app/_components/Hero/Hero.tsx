import Image from 'next/image';

import hero from '../../../../public/images/hero.jpg';

import styles from './Hero.module.scss';

import { PAGES } from '@/configs';
import { LinkButton } from '@/ui';

export const Hero: React.FC = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.heroWrapper}>
				<Image src={hero} alt="KViTa" className={styles.img} priority placeholder="blur" />
				<div className={styles.wrapper}>
					<h1 className={styles.title}>Для Вас ми зробимо все - від цукерки до торта</h1>
					<div className={styles.buttons}>
						<LinkButton link={PAGES.ORDERING} mode="default" variant="primary">
							Замовити
						</LinkButton>
						<LinkButton link={PAGES.GALLERY} mode="default" variant="ghost">
							Галерея
						</LinkButton>
					</div>
				</div>
			</div>
		</section>
	);
};
