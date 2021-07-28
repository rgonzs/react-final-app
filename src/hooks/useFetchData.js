import { useState, useEffect } from 'react';
import axios from 'axios';

import fetchData from './../helpers/fetchData';

export const useFetchData = (url, id = null) => {
	let [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [query, setQuery] = useState({ page: 1, size: 5 });

	useEffect(() => {
		const controller = axios.CancelToken.source();
		const signal = controller.token;
		async function getData() {
			try {
				const { page, size, ruc } = query;
				const res = await fetchData({ page, size, ruc, id, url }, signal);
				setData(res);
				setError(null);
				setIsLoading(false);
			} catch (error) {
				// console.error(error.response.data.message);
				setData(null);
				setError(error.response?.data.message||'No se pudo obtener el recurso, intente mas tarde');
				setIsLoading(false);
			}
		}
		getData();
		return () => controller.cancel('Request canceled');
	}, [query]);
	return { data, isLoading, error, query, setQuery };
};
