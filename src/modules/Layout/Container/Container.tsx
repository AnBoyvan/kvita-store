import { ContainerProps } from './ContainerProps';
import styles from './Container.module.scss';

export const Container: React.FC<ContainerProps> = ({ children }) => {
	return <main className={styles.container}>{children}</main>;
};
