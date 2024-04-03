import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductNutritionsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	calories?: number;
	proteins?: number;
	fats?: number;
	carbohydrates?: number;
}
