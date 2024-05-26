import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cache } from 'react';

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

const getProduct = cache(async (id: string) => {
	const product = await productService.findById(id);
	return product;
});

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
	const product = await getProduct(params.id);

	if (!product) return {};

	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${product._id}`,
			images: [
				{
					url: product.imageURL,
				},
			],
		},
	};
}

export default async function ProductPage({ params }: { params: { id: string } }) {
	const product = await getProduct(params.id);
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
