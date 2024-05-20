import type { UsersTableFilterProps } from './UsersTableFilter.props';

import { TableFilter, TableFilterGroup, TableFilterSelect } from '@/components/Features';
import { ROLES, SELECT } from '@/configs';

export const UsersTableFilter: React.FC<UsersTableFilterProps> = ({ filter, setFilter }) => {
	return (
		<>
			<TableFilter searchId="name" filter={filter} setFilter={setFilter}>
				<TableFilterGroup
					title="Статус:"
					id="role"
					data={ROLES}
					filter={filter}
					setFilter={setFilter}
				/>
				<TableFilterSelect
					id="discount"
					title="Знижка:"
					data={SELECT.isPromo}
					filter={filter}
					setFilter={setFilter}
				/>
			</TableFilter>
		</>
	);
};
