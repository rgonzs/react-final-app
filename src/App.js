import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Dashboard from './components/Dashboard/Dashboard';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Report from './components/Report/Report';
import NavbarUI from './components/Navbar/NavbarUI';
import Account from './components/Account/Account';

function App() {
  return (
    <Router>
      <GlobalStyle />
      {/* <Navbar /> */}
      <NavbarUI/>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route exact path="/report">
          <Report />
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
