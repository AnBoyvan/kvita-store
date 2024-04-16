import type { IPictureCreate, IProductUpdate } from '@/interfaces';

export const productFormData = (data: IProductUpdate): FormData => {
	const {
		image,
		gallery,
		name,
		category,
		price,
		promo,
		promoPrice,
		description,
		imageURL,
		imageGallery,
		calories,
		proteins,
		fats,
		carbohydrates,
		isActive,
		isNewProduct,
	} = data;

	const formData = new FormData();
	if (image) {
		formData.append('image', image);
	}
	if (gallery) {
		gallery.forEach(value => {
			formData.append('gallery[]', value);
		});
	}
	formData.append('name', name);
	formData.append('category', category);
	formData.append('price', String(price));
	if (promo) {
		formData.append('promo', String(promo));
	}
	if (promoPrice) {
		formData.append('promoPrice', String(promoPrice));
	}
	if (description) {
		formData.append('description', description);
	}
	if (imageURL) {
		formData.append('imageURL', imageURL);
	}
	if (imageGallery) {
		imageGallery.forEach(value => {
			formData.append('imageGallery[]', value);
		});
	}
	if (calories) {
		formData.append('calories', String(calories));
	}
	if (proteins) {
		formData.append('proteins', String(proteins));
	}
	if (fats) {
		formData.append('fats', String(fats));
	}
	if (carbohydrates) {
		formData.append('carbohydrates', String(carbohydrates));
	}
	if (isActive) {
		formData.append('isNewProduct', String(isActive));
	}
	if (isNewProduct) {
		formData.append('isNewProduct', String(isNewProduct));
	}

	return formData;
};

export const pictureFormData = (data: IPictureCreate): FormData => {
	const { image, title, description, tags } = data;

	const formData = new FormData();
	formData.append('image', image || '');
	if (tags) {
		tags.forEach(value => {
			formData.append('tags[]', value);
		});
	}
	if (title) {
		formData.append('title', title);
	}
	if (description) {
		formData.append('description', description);
	}

	return formData;
};
