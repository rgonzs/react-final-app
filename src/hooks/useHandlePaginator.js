import { useState } from 'react';

const useHandlePaginator = () => {
	const [page, setPage] = useState('');
	const [query, setQuery] = useState('');
	const [response, setResponse] = useState('');
	const [event, setEvent] = useState('');

	if (event === '') {
		return { event, page, query, response, setEvent, setResponse };
	}

	const getPaginationQueryParams = (url) => {
		console.log('fired')
		const parsedUrl = new URL(url);
		const params = new URLSearchParams(parsedUrl.search);
		return {
			...(params.get('page') && { page: params.get('page') }),
			...(params.get('size') && { size: params.get('size') }),
			...(params.get('ruc') && { ruc: params.get('ruc') }),
		};
	};

	if (event.page > page) {
		setPage(event.page);
		setQuery(getPaginationQueryParams(response.pagination.nextPag));
	} else if (event.page === 0) {
		setPage('');
		setQuery(getPaginationQueryParams(response.pagination.prevPag));
	} else {
		setPage(event.page);
		setQuery(getPaginationQueryParams(response.pagination.prevPag));
	}
	return { event, page, query, response, setEvent, setResponse };
};

export default useHandlePaginator;
