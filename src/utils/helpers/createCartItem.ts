import { ICartItem } from '@/interfaces/cart.interface';
import { IProduct } from '@/interfaces/product.interface';

export const createCartItem = (product: IProduct, quantity: number): ICartItem => {
	const { _id, name, imageURL, price, promo, promoPrice } = product;

	const productPrice = promoPrice && promoPrice > 0 ? promoPrice : price;

	const newItem = {
		productId: _id,
		productName: name,
		productImage: imageURL,
		quantity,
		price,
		promo: promo ? promo : 0,
		promoPrice: promoPrice ? promoPrice : 0,
		sum: quantity * productPrice,
	};
	return newItem;
};
