import { formatInTimeZone } from 'date-fns-tz';

export const formatDate = (date: string | Date) => {
	return formatInTimeZone(date, 'Europe/Kiev', 'dd-MM-yyyy');
};
