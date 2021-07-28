import axios from 'axios';
import { urlApiRest } from '../utils/endpoints';

export const fetchData = async ({ page, size, ruc, url }, signal) => {
	try {
		const response = await axios.get(`${urlApiRest}${url}`, {
			params: { page, size, ruc },
		});
		console.log(response.data);
		const jsonData = await response.data;
		return await jsonData;
	} catch (error) {
		return error.message;
	}
};
