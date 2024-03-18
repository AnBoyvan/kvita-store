import { IBase } from './root.interface';

export interface IPictureCreate {
	image: File;
	title?: string;
	description?: string;
	tags?: string[];
}

export interface IPicture extends IBase {
	imageURL: string;
	largeImageURL: string;
	title?: string;
	description?: string;
	tags?: string[];
}
