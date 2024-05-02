import { Tags } from './admin.interface';
import type { IBase } from './root.interface';

export interface IPictureUpdate {
	title?: string;
	description?: string;
	tags?: Tags;
}

export interface IPictureCreate extends IPictureUpdate {
	image: File;
}

export interface IPicture extends IBase {
	imageURL: string;
	largeImageURL: string;
	title?: string;
	description?: string;
	tags?: Tags;
}
