import axios from 'axios';
import { urlApiRest } from '../utils/endpoints';

const postForm = async ({ context, data }) => {
	const headers = {
		'Content-Type': 'application/json',
	};
	try {
		const response = await axios.post(`${urlApiRest}/${context}`, data);
		const json = await response.data;
		return await json;
	} catch (error) {
		return error.message;
	}
};

export default postForm;