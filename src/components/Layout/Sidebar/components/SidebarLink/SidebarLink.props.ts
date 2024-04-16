import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { ISidebarPage } from '@/interfaces';

export interface SidebarLinkProps
	extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>, 'title'>,
		ISidebarPage {}
