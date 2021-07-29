// import firebase from '../firebase';
import { useContext } from 'react';
import { AuthContext } from './../Auth';

export const signOut = () => {
	// const { currentUser, token, setToken } = useContext(AuthContext);
	localStorage.removeItem('access');
	localStorage.removeItem('refresh');
	// window.location.href = '/';
	// firebase
	//   .auth()
	//   .signOut()
	//   .then(() => {})
	//   .catch((e) => {
	//     return e;
	//   });
};
