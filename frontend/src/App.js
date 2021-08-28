import logo from './logo.svg';
import './App.css';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import LandingPage from './components/landingPage/LandingPage';
import { Route, Switch, withRouter, Redirect} from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import NavBar from './components/navbar/navbar';
import Assignments from './components/assignments/Assignments';

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/signup">
          <Signup/>
        </Route>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route exact path="/homePage">
          <HomePage/>
        </Route>
        <Route exact path="/Assignments">
          <Assignments/>
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
