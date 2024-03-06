import clsx from 'clsx';
import styles from './Menu.module.scss';
import { MenuProps } from './Menu.props';
import { NAVIGATION } from '@/config/navigation.config';
import Link from 'next/link';
import { ThemeSwitcher } from '@/ui/ThemeSwitcher/ThemeSwitcher';

export const Menu: React.FC<MenuProps> = ({ open, close, ...props }) => {
	const handleClick = () => {
		if (close) close(false);
	};

	const nav = NAVIGATION.map(({ page, title }) => {
		return (
			<li key={page} className={styles.item}>
				<Link href={page} className={styles.link} onClick={handleClick}>
					{title}
				</Link>
			</li>
		);
	});

	return (
		<div className={clsx(styles.menu, open && styles.open)}>
			{nav}
			<ThemeSwitcher className={styles.switcher} />
		</div>
	);
};
