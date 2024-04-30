import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

import type { IConfig } from '@/interfaces';

export interface SelectProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	label?: string;
	error?: FieldError | undefined;
	options: IConfig[];
	value: string | number;
	grid?: string;
	disabled?: boolean;
}
