import { LucideProps, icons } from 'lucide-react';

export interface IconProps extends LucideProps {
	name: keyof typeof icons;
}
