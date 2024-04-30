import type { icons } from 'lucide-react';
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

export interface InputProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	label?: string;
	error?: FieldError | undefined;
	icon?: keyof typeof icons;
	grid?: string;
}
