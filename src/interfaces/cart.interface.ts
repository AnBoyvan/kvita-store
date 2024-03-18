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

export interface ICartStore {
	cart: ICartItem[];
	updateStore: (data: ICartItem[]) => void;
	addToStore: (data: ICartItem) => void;
	removeFromStore: (id: string) => void;
	clearStore: () => void;
}
