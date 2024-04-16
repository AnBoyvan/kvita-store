import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { ISidebarPage } from '@/interfaces';

export interface SidebarListProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	nav: ISidebarPage[];
}
