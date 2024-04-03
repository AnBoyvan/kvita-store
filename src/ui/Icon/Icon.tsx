import clsx from 'clsx';
import { icons } from 'lucide-react';

import styles from './Icon.module.scss';
import { IconProps } from './Icon.props';

export const Icon: React.FC<IconProps> = ({ name, size, className, ...props }) => {
	const LucideIcon = icons[name];

	return (
		<LucideIcon size={size} className={clsx(!size ? styles.icon : '', className)} {...props} />
	);
};
