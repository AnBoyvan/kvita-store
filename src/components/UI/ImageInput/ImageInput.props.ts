import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface ImageInputProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	multiple?: boolean;
}
