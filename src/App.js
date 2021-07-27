import Search from './components/Search/Search';
import Dashboard from './components/Dashboard/Dashboard';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Report from './components/Report/Report';
import NavbarUI from './components/Navbar/NavbarUI';
import Account from './components/Account/Account';
import { AuthProvider } from './Auth';
import Login from './components/Login/Login';
import ManageUsers from './components/ManageUsers/ManageUsers';
import ManageClientUsers from './components/ManageUsers/ManageClientUsers';

// import PrivateRoute from './PrivateRoute';

function App() {
	return (
		<Router>
			<AuthProvider>
				<GlobalStyle />
				<NavbarUI />
				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route exact path='/' component={Dashboard} />
					<Route path='/search' component={Search} />
					<Route exact path='/report' component={Report} />
					<Route exact path='/account' component={Account} />
					<Route exact path='/manage' component={ManageUsers} />
					<Route exact path='/client/:ruc' component={ManageClientUsers} />
				</Switch>
			</AuthProvider>
		</Router>
	);
}

export default App;
