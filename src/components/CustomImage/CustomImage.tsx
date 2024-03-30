import Image, { ImageProps } from 'next/image';

export const CustomImage: React.FC<ImageProps> = ({ src, className, ...props }) => {
	const cardSizes =
		'(min-width: 1700px) 288px, (min-width: 1040px) 17.5vw, (min-width: 780px) calc(25vw - 30px), calc(50vw - 24px)';

	return (
		<Image
			src={src}
			style={{ objectFit: 'cover', zIndex: '-2' }}
			sizes={cardSizes}
			fill
			quality={70}
			{...props}
		/>
	);
};
