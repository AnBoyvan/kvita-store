'use client';

import { PropagateLoader } from 'react-spinners';

export const Spinner: React.FC = () => {
	return (
		<div className="flex justify-center items-center w-full ">
			<PropagateLoader color="#ff3160" speedMultiplier={2} size={10} />
		</div>
	);
};
