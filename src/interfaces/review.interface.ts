import type { IBase } from './root.interface';

export interface IReview extends IBase {
	productId: string;
	ownerId: string;
	ownerName: string;
	comment: string;
}

export interface IReviewCreate {
	productId: string;
	comment: string;
}

export interface IReviewUpdate {
	_id: string;
	comment: string;
}
