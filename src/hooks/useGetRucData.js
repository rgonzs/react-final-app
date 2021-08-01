import { useState, useEffect } from 'react';

import { getRucData } from './../helpers/getRucData';

export const useGetRucData = () => {
	const [data, setData] = useState('');
	const [error, setError] = useState(null);
	const [pending, setIsPending] = useState(true);
	const [ruc, setRuc] = useState(null);

	useEffect(() => {
		
		const controller = new AbortController();
		const signal = controller.signal;
		let result = getRucData();
		console.log("useGetRucData",result);
		setData(result);
		setError(null);
		setIsPending(false);

	}, [ruc]);

	return { data, error, pending, setRuc };
};
