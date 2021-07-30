import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router';
// import firebase from './firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [pending, setPending] = useState(null);
	const [token, setToken] = useState(() => localStorage.getItem('access'));
	const history = useHistory()

	useEffect(() => {
		if (!token) {
			setCurrentUser(null);
			history.push('/login')
		} else {
			const user = jwt_decode(token);
			setCurrentUser(user);
			setPending(false);
		}
	}, [token]);

	if (pending) {
		return <>Loading...</>;
	}

	return (
		<AuthContext.Provider value={{ currentUser, token, setToken }}>
			{children}
		</AuthContext.Provider>
	);
};
