import styles from './GalleryItem.module.scss';
import type { GalleryItemProps } from './GalleryItem.props';

import { Motion } from '@/components/Features';
import { CustomImage, Icon } from '@/components/Shared';
import { Button } from '@/components/UI';
import { useUserStore } from '@/store';
import { isManager, isSuperuser } from '@/utils/helpers';

export const GalleryItem: React.FC<GalleryItemProps> = ({
	picture,
	order,
	motionProps,
	setCompose,
	setRemovePicture,
	setCurrent,
	...props
}) => {
	const { user } = useUserStore();
	const { largeImageURL, title } = picture;

	return (
		<Motion
			initial="hidden"
			animate="default"
			transition={{ delay: order ? order * 0.2 : 0 }}
			{...motionProps}
		>
			<li className={styles.item} {...props}>
				<CustomImage
					src={largeImageURL}
					alt={title ? title : 'sweets'}
					className={styles.image}
					sizes="(min-width: 1700px) 360px, (min-width: 780px) 21.78vw, calc(50vw - 27px)"
					onClick={setCurrent}
				/>
				{Boolean(user.isLoggedIn && isManager(user.role)) && (
					<div className={styles.buttons}>
						<Button type="button" mode="link" className="text-success" onClick={setCompose}>
							<Icon name="PencilLine" size={32} />
						</Button>
						{isSuperuser(user.role) && (
							<Button type="button" mode="link" className="text-error" onClick={setRemovePicture}>
								<Icon name="Trash" size={32} />
							</Button>
						)}
					</div>
				)}
			</li>
		</Motion>
	);
};
