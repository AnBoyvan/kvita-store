import clsx from 'clsx';

import styles from './Htag.module.scss';
import { HtagProps } from './Htag.props';

export const Htag: React.FC<HtagProps> = ({ tag, className, children }: HtagProps) => {
	switch (tag) {
		case 'h1':
			return <h1 className={clsx(className, styles.h1)}>{children}</h1>;
		case 'h2':
			return <h2 className={clsx(className, styles.h2)}>{children}</h2>;
		case 'h3':
			return <h3 className={clsx(className, styles.h3)}>{children}</h3>;
		default:
			return <></>;
	}
};
