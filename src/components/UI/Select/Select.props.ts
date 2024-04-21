import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { IConfig } from '@/interfaces';

export interface SelectProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	options: IConfig[];
}
