import { icons } from 'lucide-react';
import { IconProps } from './Icon.props';
import clsx from 'clsx';
import styles from './Icon.module.scss';

export const Icon: React.FC<IconProps> = ({
	name,
	size,
	className,
	...props
}) => {
	const LucideIcon = icons[name];

	return (
		<LucideIcon
			size={size}
			className={clsx(!size ? styles.icon : '', className)}
			{...props}
		/>
	);
};
