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
		async function callApi() {
			let result = null;

			if (ruc !== null) {
				try {
					console.log('Fetching data');
					result = await getRucData(ruc, signal);
					return await result;
				} catch (error) {
					setData(null);
					setIsPending(false);
					setError(error);
				}
			}
		}
		let result = callApi()
		console.log(result)
		setData(result);
		setError(null);
		setIsPending(false);
		return () => {
			controller.abort();
		};
	}, [ruc]);

	return { data, error, pending, setRuc };
};
