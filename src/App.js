import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './components/Search/Search';
// import Dashboard from './pages/Dashboard/Dashboard';
import GlobalStyle from './globalStyles';
import Report from './components/Report/Report';
import NavbarUI from './components/Navbar/NavbarUI';
import Account from './components/Account/Account';
import Login from './components/Login/Login';
import ManageUsers from './components/ManageUsers/ManageUsers';
import ManageClientUsers from './components/ManageUsers/ManageClientUsers';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/customTheme';

function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<AuthProvider>
					<GlobalStyle />
					<NavbarUI />
					<Switch>
						<Route path='/login'>
							<Login />
						</Route>
						{/* <PrivateRoute exact path='/' component={Dashboard} /> */}
						<PrivateRoute path='/search' component={Search} />
						<PrivateRoute exact path='/report' component={Report} />
						<PrivateRoute exact path='/account' component={Account} />
						<PrivateRoute exact path='/manage' component={ManageUsers} />
						<PrivateRoute
							exact
							path='/client/:ruc/:id'
							component={ManageClientUsers}
						/>
					</Switch>
				</AuthProvider>
			</ThemeProvider>
		</Router>
	);
}

export default App;
