import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';

import type { IProductCreate, IProductUpdate } from '@/interfaces';

export interface ComposeNutrientsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	watch: UseFormWatch<IProductCreate | IProductUpdate>;
	register: UseFormRegister<IProductCreate | IProductUpdate>;
	errors: FieldErrors<IProductCreate | IProductUpdate>;
}
