import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './components/Search/Search';
import Dashboard from './components/Dashboard/Dashboard';
import GlobalStyle from './globalStyles';
import Report from './components/Report/Report';
import NavbarUI from './components/Navbar/NavbarUI';
import Account from './components/Account/Account';
import Login from './components/Login/Login';
import ManageUsers from './components/ManageUsers/ManageUsers';
import ManageClientUsers from './components/ManageUsers/ManageClientUsers';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';

// import { createTheme, ThemeProvider } from '@material-ui/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import { esES } from '@material-ui/core/locale';

const theme = createMuiTheme(
	{
		palette: {
			primary: {
				main: '#0068d0',
			},
			secondary:{
				main: '#5D7185'
			}
		},
	},
	esES
);

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
						<PrivateRoute exact path='/' component={Dashboard} />
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
