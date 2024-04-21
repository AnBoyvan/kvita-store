import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { IConfig } from '@/interfaces';

export interface CheckboxGroupProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	data: IConfig[];
	current: string[];
	setCurrent: any;
}
