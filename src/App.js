import Search from './components/Search/Search';
import Dashboard from './components/Dashboard/Dashboard';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Report from './components/Report/Report';
import NavbarUI from './components/Navbar/NavbarUI';
import Account from './components/Account/Account';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavbarUI/>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <PrivateRoute exact path="/report">
          <Report />
        </PrivateRoute>
        <Route exact path="/account">
          <Account />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
