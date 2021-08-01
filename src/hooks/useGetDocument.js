import { useState, useEffect } from 'react';
import axios from 'axios';

import getDocument from './../helpers/getDocument';

export const useGetDocument = (token) => {
	let [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [query, setQuery] = useState({});

	useEffect(() => {
		const controller = axios.CancelToken.source();
		const signal = controller.token;
		async function getData() {
			try {
				const res = await getDocument({ query }, signal, token);
				setData(res);
				setError(null);
				setIsLoading(false);
			} catch (error) {
				setData(null);
				setError(
					error.response?.data.message ||
						'No se pudo obtener el recurso, intente mas tarde'
				);
				setIsLoading(false);
			}
		}
		getData();
		return () => controller.cancel('Request canceled');
	}, [query]);

	return { data, isLoading, error, query, setQuery };
};
