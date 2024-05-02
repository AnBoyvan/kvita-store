import type { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';

import type { Tags } from '@/interfaces';

export interface TagsCheckboxProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	tags?: Tags;
	checkedTags: Tags;
	setCheckedTags: Dispatch<SetStateAction<Tags>>;
}
