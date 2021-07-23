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
import ManageUsers from './components/ManageUsers/ManageUsers';

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
          <Route exact path="/" component={Dashboard}/>
          <Route path="/search" component={Search}/>
          <Route exact path="/report" component={Report}/>
          <Route exact path="/account" component={Account}/>
          <Route exact path="/update" component={UpdateUsers}/>
          <Route exact path="/create" component={ManageUsers}/>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
