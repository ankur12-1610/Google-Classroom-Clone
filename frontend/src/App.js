import logo from './logo.svg';
import './App.css';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import { Route, Switch, withRouter, Redirect} from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/signup">
          <Signup/>
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
