import { AddPicture } from '../AddPicture/AddPicture';
import { AddTag } from '../AddTag/AddTag';

import styles from './GalleryActions.module.scss';
import type { GalleryActionsProps } from './GalleryActions.props';

export const GalleryActions: React.FC<GalleryActionsProps> = ({ tags, ...props }) => {
	return (
		<div className={styles.actions} {...props}>
			<AddPicture tags={tags} />
			<AddTag tags={tags} />
		</div>
	);
};
