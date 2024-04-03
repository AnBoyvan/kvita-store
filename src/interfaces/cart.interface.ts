export interface ICartItem {
	productId: string;
	productName: string;
	productImage: string;
	quantity: number;
	price: number;
	promo?: number;
	promoPrice?: number;
	sum: number;
}

export interface ICartSum {
	sum: number;
	discount: number;
	total: number;
}

export interface ICartStore {
	cart: ICartItem[];
	updateCartStore: (data: ICartItem[]) => void;
	addToCartStore: (data: ICartItem) => void;
	removeFromCartStore: (id: string) => void;
	clearCartStore: () => void;
}
