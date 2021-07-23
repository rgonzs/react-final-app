import axios from 'axios';
import { urlApiRest } from '../utils/endpoints';

export const fetchClients = async ({ page, size, ruc }, signal) => {
	try {
		const response = await axios.get(`${urlApiRest}/api/clients`, {
			params: { page, size, ruc },
		});
		console.log(response.data);
		const jsonData = await response.data;
		return await jsonData;
	} catch (error) {
		return error.message;
	}
};
