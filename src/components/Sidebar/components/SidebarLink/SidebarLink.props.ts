import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ISidebarPage } from '@/interfaces';

export interface SidebarLinkProps
	extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>, 'title'>,
		ISidebarPage {}
