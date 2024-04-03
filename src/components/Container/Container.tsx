import styles from './Container.module.scss';
import { ContainerProps } from './ContainerProps';

export const Container: React.FC<ContainerProps> = ({ children }) => {
	return <main className={styles.container}>{children}</main>;
};
