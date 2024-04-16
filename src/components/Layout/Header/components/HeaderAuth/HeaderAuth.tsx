import { Auth, Modal } from '@/components/Features';
import { Icon } from '@/components/Shared';
import { Button } from '@/components/UI';
import { useModal } from '@/hooks';

export const HeaderAuth: React.FC = () => {
	const { modalRef, openModal } = useModal();
	const handleClick = () => {
		openModal();
	};

	return (
		<>
			<Button mode="simple" onClick={handleClick}>
				<Icon name="LogIn" />
			</Button>
			<Modal ref={modalRef} container button>
				<Auth />
			</Modal>
		</>
	);
};
