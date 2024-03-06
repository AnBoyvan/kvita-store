export interface ICartItem {
	productId: string;
	productName: string;
	productImage: string;
	quantity: number;
	price: number;
	discount?: number;
	discountSum?: number;
	sum: number;
}
