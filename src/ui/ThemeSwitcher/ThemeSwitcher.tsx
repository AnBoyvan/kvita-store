import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { ThemeSwitcherProps } from './ThemeSwitcher.props';
import { useTheme } from 'next-themes';

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
	...props
}: ThemeSwitcherProps) => {
	const { theme, setTheme } = useTheme();
	const [icon, setIcon] = useState<'Moon' | 'Sun'>('Moon');

	const handleThemeClick = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	useEffect(() => {
		setIcon(theme === 'light' ? 'Moon' : 'Sun');
	}, [theme]);

	return (
		<div {...props}>
			<Button mode="simple" onClick={handleThemeClick}>
				<Icon name={icon} />
			</Button>
		</div>
	);
};
