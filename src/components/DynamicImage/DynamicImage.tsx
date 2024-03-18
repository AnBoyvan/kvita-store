import Image, { ImageProps } from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

export const DynamicImage: React.FC<ImageProps> = async ({ ...props }) => {
	const buffer = await fetch(props.src.toString()).then(async res =>
		Buffer.from(await res.arrayBuffer()),
	);

	const { base64 } = await getPlaiceholder(buffer);

	return (
		<Image
			style={{ objectFit: 'cover', zIndex: '-2' }}
			fill
			placeholder="blur"
			loading="lazy"
			blurDataURL={base64}
			{...props}
		/>
	);
};
