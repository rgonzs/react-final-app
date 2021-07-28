import axios from 'axios';
import { urlApiRest } from '../utils/endpoints';

const putForm = async ({ context, data }) => {
	const headers = {
		'Content-Type': 'application/json',
	};
	try {
		const response = await axios.put(`${urlApiRest}/${context}`, data, {
			headers: headers,
		});
		console.log(response.data.message);
		const json = await response.data;
		return await json;
	} catch (error) {
		// console.log(error.response.data)
		return await error.response.data;
	}
};

export default putForm;
