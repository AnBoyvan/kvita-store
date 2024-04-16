import styles from './HeaderSearch.module.scss';

import { Modal, Search } from '@/components/Features';
import { Icon } from '@/components/Shared';
import { Button } from '@/components/UI';
import { useModal } from '@/hooks';

export const HeaderSearch: React.FC = () => {
	const { modalRef, openModal } = useModal();

	const handleClick = () => {
		openModal();
	};

	return (
		<>
			<Button mode="simple" onClick={handleClick}>
				<Icon name="Search" />
			</Button>
			<Modal ref={modalRef} className={styles.modal}>
				<Search />
			</Modal>
		</>
	);
};
