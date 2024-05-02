'use client';

import { useState } from 'react';

import styles from './GalleryTagsList.module.scss';
import type { GalleryTagsListProps } from './GalleryTagsList.props';

import { Modal } from '@/components/Features';
import { Accept, Icon } from '@/components/Shared';
import { Button } from '@/components/UI';
import { useModal, useMutateTags } from '@/hooks';

export const GalleryTags: React.FC<GalleryTagsListProps> = ({ tags, ...props }) => {
	const { removeTag } = useMutateTags();
	const { modalRef, openModal, closeModal } = useModal();

	const [current, setCurrent] = useState<string>('');

	const handleClick = async (tag: string) => {
		await setCurrent(tag);
		openModal();
	};

	const handleRemove = () => {
		removeTag({ tags: [current] });
		reject();
	};

	const reject = () => {
		setCurrent('');
		closeModal();
	};

	const list =
		tags &&
		tags.map((tag, index) => (
			<li key={index} className={styles.tag}>
				<span>{tag}</span>
				<Button mode="simple" className={styles.button} onClick={() => handleClick(tag)}>
					<Icon name="Trash" />
				</Button>
			</li>
		));

	return (
		<ul className={styles.wrapper} {...props}>
			{list}
			<Modal ref={modalRef} container>
				<Accept
					type="submit"
					message={`Видалити тег "${current}" ?`}
					onAccept={() => handleRemove()}
					onCancel={() => reject()}
				/>
			</Modal>
		</ul>
	);
};
