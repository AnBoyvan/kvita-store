import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface LikeButtonProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	productId: string;
	favorites?: string[];
}
