import { productService } from '@/services/product.service';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: { id: string } }) {
	const product = await productService.findById(params.id);
	if (!product) notFound();

	return <h1>{product.name}</h1>;
}
