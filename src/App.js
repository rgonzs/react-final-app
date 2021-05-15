import Search from './components/Search/Search';
import Dashboard from './components/Dashboard/Dashboard';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Report from './components/Report/Report';
import NavbarUI from './components/Navbar/NavbarUI';
import Account from './components/Account/Account';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import Login from './components/Login/Login';
import UpdateUsers from './components/UpdateUsers/UpdateUsers';

function App() {
  return (
    <Router>
      <AuthProvider>
        <GlobalStyle />
        <NavbarUI />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/" component={Dashboard}/>
          <PrivateRoute path="/search" component={Search}/>
          <PrivateRoute exact path="/report" component={Report}/>
          <PrivateRoute exact path="/account" component={Account}/>
          <PrivateRoute exact path="/update" component={UpdateUsers}/>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
