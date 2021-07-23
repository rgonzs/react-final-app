import { urlApiRest } from '../utils/endpoints';

export const getRucData = async () => {
	try {
		// const response = await fetch(`${urlApiRest}/api/client?ruc=${ruc}`, { signal });
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {  }).then( response=>response.json());
		return response;
	} catch (error) {
		throw new Error(error);
	}
};
