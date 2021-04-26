import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Dashboard from './components/Dashboard/Dashboard';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Report from './components/Report/Report';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
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
      </Switch>
    </Router>
  );
}

export default App;
