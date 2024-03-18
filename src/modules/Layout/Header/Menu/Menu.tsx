import clsx from 'clsx';
import styles from './Menu.module.scss';
import { MenuProps } from './Menu.props';
import { ThemeSwitcher } from '@/ui/ThemeSwitcher/ThemeSwitcher';
import { Navigation } from '@/components/Navigation/Navigation';
import { LogoutButton } from '@/modules/Auth/LogoutButton/LogoutButton';
import { Button } from '@/ui/Button/Button';
import { Icon } from '@/ui/Icon/Icon';
import { useContext, useState } from 'react';
import { ModalContext } from '@/hooks/useModal';
import debounce from 'lodash.debounce';

export const Menu: React.FC<MenuProps> = () => {
	const [close, setSlose] = useState<boolean>(false);
	const { closeModal } = useContext(ModalContext);

	const handleClose = () => {
		setSlose(true);
		closeModalWindow();
	};

	const handleMenuOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.target === e.currentTarget) handleClose();
	};

	const closeModalWindow = debounce(() => {
		closeModal();
	}, 300);

	return (
		<div className={styles.menuOverlay} onClick={handleMenuOverlayClick}>
			<div className={clsx(styles.menu, close && styles.close)}>
				<Button mode="simple" className={styles.closeBtn} onClick={handleClose}>
					<Icon name="X" />
				</Button>
				<ThemeSwitcher className={styles.switcher} />
				<Navigation action={handleClose} className={styles.nav} />
				<LogoutButton />
			</div>
		</div>
	);
};
