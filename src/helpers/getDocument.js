import axios from 'axios';
import { urlApiRest } from '../utils/endpoints';

const getDocument = async ({ query }, signal, token) => {
    console.log(query);
	const response = await axios.get(`${urlApiRest}/api/getDocuments`, {
		params: query,
		headers: {
			Authorization: `Bearer ${token}`,
		},
		cancelToken: signal,
	});
	return await response.data;
};

export default getDocument;
