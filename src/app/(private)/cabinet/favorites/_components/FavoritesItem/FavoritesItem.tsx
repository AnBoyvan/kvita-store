'use client';

import styles from './FavoritesItem.module.scss';
import type { FavoritesItemProps } from './FavoritesItem.props';

import { Modal } from '@/components/Features';
import { Accept, CustomImage, Htag, Icon } from '@/components/Shared';
import { Button, LinkButton } from '@/components/UI';
import { PAGES } from '@/configs';
import { useModal, useMutateProducts } from '@/hooks';

export const FavoritesItem: React.FC<FavoritesItemProps> = ({ product }) => {
	const { _id, name, imageURL, description } = product;
	const { updFavorites } = useMutateProducts();
	const { modalRef, closeModal, openModal } = useModal();

	const handleAccept = () => {
		updFavorites(_id);
		closeModal();
	};

	return (
		<div className={styles.item}>
			<div className={styles.image}>
				<CustomImage src={imageURL} alt={name} />
			</div>
			<div className={styles.info}>
				<Htag tag="h3" className={styles.name}>
					{name}
				</Htag>
				<div>{description}</div>
				<LinkButton
					mode="default"
					variant="primary"
					link={`${PAGES.PRODUCTS}/${_id}`}
					className={styles.link}
				>
					<span>Більше</span>
					<Icon name="ChevronsRight" />
				</LinkButton>
			</div>
			<Button mode="simple" className={styles.button} onClick={openModal}>
				<Icon name="Trash2" />
			</Button>
			<Modal ref={modalRef} container>
				<Accept
					type="button"
					message={`Видалити ${name} з улюблених?`}
					onAccept={handleAccept}
					onCancel={closeModal}
				/>
			</Modal>
		</div>
	);
};
