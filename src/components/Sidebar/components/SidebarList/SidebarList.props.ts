import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ISidebarPage } from '@/interfaces';

export interface SidebarListProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	nav: ISidebarPage[];
}
