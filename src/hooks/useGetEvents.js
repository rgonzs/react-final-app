import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { urlApiRest } from '../utils/endpoints';
import { AuthContext } from './../Auth';

const useGetEvents = () => {
	const { token } = useContext(AuthContext);
	const [data, setData] = useState('');
	const [error, setError] = useState(null);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(`${urlApiRest}/events`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				return response.data;
			} catch (error) {
				return error;
			}
		};
		const res = (data = getData());
		setData(res);
        setError(null)

		return () => {};
	}, [input]);

	return [data, error];
};

export default useGetEvents;
