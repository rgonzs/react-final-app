import { useState, useEffect } from 'react';
import { fetchData } from './../helpers/fetchClients';

export const useFetchData = (url, token) => {
	let [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [query, setQuery] = useState({ page: 1, size: 5 });

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		async function getData() {
			try {
				const { page, size, ruc } = query;
				const res = await fetchData({ page, size, ruc, url }, token ,signal);
				setData(res);
				setError(null);
				setIsLoading(false);
			} catch (error) {
				setData(null);
				setError(error.message);
				setIsLoading(false);
			}
		}
		getData();
		// return () => controller.abort();
	}, [query]);
	return { data, isLoading, error, query, setQuery };
};
