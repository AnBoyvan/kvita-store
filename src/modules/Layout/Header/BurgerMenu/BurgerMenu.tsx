import { BurgerMenuProps } from './BurgerMenu.props';
import styles from './BurgerMenu.module.scss';
import { useState } from 'react';
import { Button } from '@/ui/Button/Button';
import { Icon } from '@/ui/Icon/Icon';
import { ThemeSwitcher } from '@/ui/ThemeSwitcher/ThemeSwitcher';
import { LogoutButton } from '@/modules/Auth/LogoutButton/LogoutButton';
import { Navigation } from '@/components/Navigation/Navigation';
import { Menu } from '@/components/Menu/Menu';

export const BurgerMenu: React.FC<BurgerMenuProps> = () => {
	const [closed, setSlosed] = useState<boolean>(false);

	const handleClose = () => {
		setSlosed(true);
	};

	return (
		<Menu position="left" closed={closed}>
			<Button mode="simple" className={styles.closeBtn} onClick={handleClose}>
				<Icon name="X" />
			</Button>
			<ThemeSwitcher className={styles.switcher} />
			<Navigation action={handleClose} className={styles.nav} />
			<LogoutButton />
		</Menu>
	);
};
