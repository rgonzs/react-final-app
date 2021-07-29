import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
// import firebase from './firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [pending, setPending] = useState(null);
	const [token, setToken] = useState(() => localStorage.getItem('access'));

	useEffect(() => {
		if (!token) {
			setCurrentUser(null);
		} else {
			const user = jwt_decode(token);
			// console.log(user);
			setCurrentUser(user);
			setPending(false);
		}
		// });
	}, [token]);

	if (pending) {
		return <>Loading...</>;
	}
	console.log(token);
	console.log(currentUser);

	return (
		<AuthContext.Provider value={{ currentUser, token, setToken }}>
			{children}
		</AuthContext.Provider>
	);
};
