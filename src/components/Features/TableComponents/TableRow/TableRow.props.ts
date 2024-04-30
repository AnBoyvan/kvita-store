import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { IData, IDataType } from '../Table/Table.props';

export interface TableRowProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
	children: ReactNode;
	data?: IData;
	dataType: IDataType;
	link?: boolean;
}
