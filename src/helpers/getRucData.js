import { urlApiRest } from '../utils/endpoints';

export const getRucData = async (ruc, signal) => {
	try {
		const response = await fetch(`${urlApiRest}/api/client?ruc=${ruc}`, { signal });
		const jsonData = await response.json();
		return jsonData;
	} catch (error) {
		throw new Error(error);
	}
};
