import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductNutritionsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	calories?: number | null;
	proteins?: number | null;
	fats?: number | null;
	carbohydrates?: number | null;
}
