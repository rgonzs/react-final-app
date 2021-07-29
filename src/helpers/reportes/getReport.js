import axios from 'axios';
import { urlApiRest } from '../../utils/endpoints';

export const getReport = async ({ id, name }, token) => {
	try {
		const response = await axios.get(`${urlApiRest}/api/download_report`, {
			params: { id },
            responseType: 'blob',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const file = await response.data;
        const url = window.URL.createObjectURL(new Blob([file]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', name)
        document.body.appendChild(link)
        link.click()
	} catch (error) {
        console.error(error)
		return error.message;
	}
};
