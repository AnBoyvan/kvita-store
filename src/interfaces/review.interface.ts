import { IBase } from './root.interface';

export interface IReview extends IBase {
	productId: string;
	ownerId: string;
	ownerName: string;
	comment: string;
	date?: string;
}

export interface IReviewCreate {
	productId: string;
	comment: string;
}
