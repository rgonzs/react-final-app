import axios from 'axios';
import { urlApiRest } from '../utils/endpoints';

const postForm = async ({ context, token, data }) => {
	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${token}`,
	};
	try {
		const response = await axios.post(`${urlApiRest}/${context}`, data, {
			headers: headers,
		});
		const json = await response.data;
		return await json;
	} catch (error) {
		return error.response.data;
	}
};

export default postForm;
