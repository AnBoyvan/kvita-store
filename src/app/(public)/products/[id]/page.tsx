import { notFound } from 'next/navigation';

import {
	ProductContainer,
	ProductDetails,
	ProductImages,
	ProductInfo,
	ProductNutritions,
	ReviewForm,
	ReviewsContainer,
	ReviewsList,
} from './_components';

import { Divider } from '@/components/Shared';
import { BackButton } from '@/components/UI';
import { productService } from '@/services/kvita-api';

export default async function ProductPage({ params }: { params: { id: string } }) {
	const product = await productService.findById(params.id);
	if (!product) notFound();

	const {
		_id,
		name,
		imageURL,
		imageGallery,
		description,
		calories,
		proteins,
		fats,
		carbohydrates,
	} = product;
	return (
		<>
			<BackButton />
			<ProductContainer>
				<ProductImages name={name} image={imageURL} gallery={imageGallery} />
				<div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full">
					<ProductInfo _id={_id} name={name} description={description} />
					{calories && (
						<ProductNutritions
							calories={calories}
							proteins={proteins}
							fats={fats}
							carbohydrates={carbohydrates}
						/>
					)}
					<ProductDetails product={product} />
				</div>
			</ProductContainer>
			<Divider />
			<ReviewsContainer>
				<ReviewsList productId={_id} />
				<ReviewForm title="Написати відгук" button="Залишити відгук" productId={_id} />
			</ReviewsContainer>
		</>
	);
}
