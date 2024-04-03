import { ChangeEvent, DetailedHTMLProps, FormHTMLAttributes } from 'react';
import { SubmitHandler } from 'react-hook-form';

export interface SearchFieldProps
	extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
	variant: 'primary' | 'secondary';
	initialValue?: string;
	handleReset?: () => void;
	submitAction: SubmitHandler<{ [key: string]: string }>;
	onChange: (e: ChangeEvent<HTMLFormElement>) => void;
}
