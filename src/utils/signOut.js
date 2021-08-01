export const signOut = () => {
	// setToken('')
	localStorage.removeItem('access');
	localStorage.removeItem('refresh');
};
