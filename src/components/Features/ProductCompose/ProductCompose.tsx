'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';

import styles from './ProductCompose.module.scss';
import type { ProductComposeProps } from './ProductCompose.props';
import {
	ComposeAcceptButton,
	ComposeImageGallery,
	ComposeMainImage,
	ComposeNutrients,
	ComposeRejectButton,
} from './components';

import { Spinner } from '@/components/Shared';
import { Input, Select } from '@/components/UI';
import { CATEGORIES, PAGES, SELECT } from '@/configs';
import { useMutateProducts } from '@/hooks';
import { Category, type IProductCreate, type IProductUpdate } from '@/interfaces';
import { createProductSchema, updateProductSchema } from '@/utils/validation';

export const ProductCompose: React.FC<ProductComposeProps> = ({ isNew, product, ...props }) => {
	const router = useRouter();
	const { create, creating, createSuccess, update, updating, updateSuccess } = useMutateProducts();

	const [showSpinner, setShowSpinner] = useState<boolean>(false);

	const defaultValues = {
		image: undefined,
		gallery: undefined,
		name: product?.name || '',
		price: product?.price || 0,
		promo: product?.promo || 0,
		promoPrice: product?.promoPrice || 0,
		description: product?.description || '',
		category: product?.category || Category.Other,
		imageURL: product?.imageURL || '',
		imageGallery: product?.imageGallery || [],
		calories: product?.calories || 0,
		proteins: product?.proteins || 0,
		fats: product?.fats || 0,
		carbohydrates: product?.carbohydrates || 0,
		isActive: product?.isActive ? String(product?.isActive) : 'true',
		isNewProduct: product?.isNewProduct ? String(product?.isNewProduct) : 'true',
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
		reset,
	} = useForm<IProductCreate | IProductUpdate>({
		mode: 'all',
		reValidateMode: 'onSubmit',
		defaultValues: defaultValues,
		resolver: yupResolver(isNew ? createProductSchema : updateProductSchema),
	});

	const onSubmit: SubmitHandler<IProductCreate | IProductUpdate> = async data => {
		let success = false;

		if (isNew) {
			await create(data as IProductCreate);
			success = true;
		}

		if (!isNew && product) {
			await update({ id: product._id, data: data });
			success = true;
		}
	};

	const showErrors = () => {
		const messages = Object.values(errors).map(i => i.message);
		const uniqueMessages = Array.from(new Set(messages));
		uniqueMessages.forEach(message => toast.error(message));
	};

	const reject = () => {
		reset();
		router.replace(PAGES.DASHBOARD_PRODUCTS);
	};

	useEffect(() => {
		if (createSuccess || updateSuccess) {
			reject();
		}
	}, [createSuccess, updateSuccess]);

	// useEffect(() => {
	// 	if (product) reset(defaultValues);
	// }, [product, reset]);

	useEffect(() => {
		setShowSpinner(isNew ? creating : updating);
	}, [creating, updating]);

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit, showErrors)} {...props}>
			<div className={styles.compose}>
				<div className={styles.images}>
					<ComposeMainImage
						setValue={setValue}
						image={watch('image')}
						imageURL={watch('imageURL')}
					/>
					<ComposeImageGallery
						gallery={watch('gallery')}
						imageURL={watch('imageURL')}
						imageGallery={watch('imageGallery')}
						setValue={setValue}
					/>
				</div>
				<div className={styles.info}>
					<Input
						label="Назва"
						{...register('name')}
						type="text"
						error={errors.name}
						value={watch('name')}
					/>
					<div className={styles.block}>
						<Input
							label="Ціна"
							{...register('price')}
							type="number"
							error={errors.price}
							value={watch('price')}
							min={0}
							grid="a"
						/>
						<Input
							label="Знижка - %"
							{...register('promo')}
							type="number"
							error={errors.promo}
							value={watch('promo')}
							min={0}
							grid="b"
						/>
						<Input
							label="Знижка - ціна"
							{...register('promoPrice')}
							type="number"
							error={errors.promoPrice}
							value={watch('promoPrice')}
							min={0}
							grid="c"
						/>
					</div>
					<div className={styles.block}>
						<Select
							label="Категорія"
							options={CATEGORIES}
							{...register('category')}
							error={errors.category}
							value={watch('category')}
							grid="a"
						/>
						<Select
							label="Новинка"
							options={SELECT.yesOrNo}
							{...register('isNewProduct')}
							error={errors.isNewProduct}
							value={watch('isNewProduct') || ''}
							grid="b"
							disabled={isNew}
						/>
						<Select
							label="Активний"
							options={SELECT.yesOrNo}
							{...register('isActive')}
							error={errors.isActive}
							value={watch('isActive') || ''}
							grid="c"
							disabled={isNew}
						/>
					</div>
					<ComposeNutrients watch={watch} register={register} errors={errors} />
					<div className={styles.descrWrapper}>
						<span className={styles.descrTitle}>Опис</span>
						<textarea
							{...register('description')}
							value={watch('description')}
							rows={5}
							className={styles.descr}
						/>
					</div>
				</div>
			</div>
			<div className={styles.buttons}>
				<ComposeAcceptButton disabled={showSpinner} isNew={isNew} />
				<ComposeRejectButton disabled={showSpinner} action={reject} />
			</div>
			{showSpinner && (
				<div className={styles.spinner}>
					<Spinner />
				</div>
			)}
		</form>
	);
};
