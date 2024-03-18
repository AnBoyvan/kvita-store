import { HtagProps } from './Htag.props';

import styles from './Htag.module.scss';
import clsx from 'clsx';

const Htag = ({ tag, className, children }: HtagProps): JSX.Element => {
	switch (tag) {
		case 'h1':
			return <h1 className={clsx(styles.h1, className)}>{children}</h1>;
		case 'h2':
			return <h2 className={clsx(styles.h2, className)}>{children}</h2>;
		case 'h3':
			return <h3 className={clsx(styles.h3, className)}>{children}</h3>;
		default:
			return <></>;
	}
};

export default Htag;
