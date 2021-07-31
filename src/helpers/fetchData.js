import axios from 'axios';
import { urlApiRest } from '../utils/endpoints';

const fetchData = async ({ page, size, ruc, id ,url },token, signal) => {
	// try {
		const response = await axios.get(`${urlApiRest}${url}`, {
			params: { page, size, ruc:id},
			headers:{
				Authorization: `Bearer ${token}`
			},
			cancelToken: signal,
		});
		return await response.data
	// } catch (error) {
	// 	console.error(error.response.data.message);
	// 	return error.response.data.message;
	// }
	// const jsonData = await response.data;
	// console.log(jsonData);
	// return await jsonData;
};

export default fetchData;
