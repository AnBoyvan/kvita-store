import clsx from 'clsx';

import styles from './Divider.module.scss';
import type { DividerProps } from './Divider.props';

export const Divider: React.FC<DividerProps> = ({ className, ...props }) => {
	return <div className={clsx(styles.divider, className)} {...props}></div>;
};
