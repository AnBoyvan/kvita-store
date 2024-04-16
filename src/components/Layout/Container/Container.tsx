import styles from './Container.module.scss';
import type { ContainerProps } from './Container.props';

export const Container: React.FC<ContainerProps> = ({ children }) => {
	return <main className={styles.container}>{children}</main>;
};
