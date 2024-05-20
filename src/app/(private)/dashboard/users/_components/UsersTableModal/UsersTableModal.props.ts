import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { IUser } from '@/interfaces';

export interface UsersTableModalProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	user: IUser;
	action: () => void;
}
