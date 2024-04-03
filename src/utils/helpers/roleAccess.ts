import { Role } from '@/interfaces';

const isManager = (role: string) => {
	const access = role === Role.Manager || role === Role.Admin || role === Role.Superuser;

	return access;
};

const isAdmin = (role: string) => {
	const access = role === Role.Admin || role === Role.Superuser;

	return access;
};

const isSuperuser = (role: string) => {
	const access = role === Role.Superuser;

	return access;
};

export { isAdmin, isManager, isSuperuser };
