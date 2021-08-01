import { urlApiRest } from '../utils/endpoints';

export const getRucData = async (ruc, token) => {
	const headers = {
		Authorization: `Bearer ${token}`
	}
	try {
		const response = await fetch(`${urlApiRest}/api/client?ruc=${ruc}`,{
			headers: headers
		});
		if (response.status === 200) {
			return await response.json();
		} else if (response.status === 404) {
			throw new Error('Ruc no existe');
		} else {
			throw new Error('Error interno');
		}
	} catch (error) {
		// console.log(error);
		return error.message;
	}
};
