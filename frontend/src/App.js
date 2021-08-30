import React, { useEffect, useState } from 'react';
import './App.css';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import LandingPage from './components/landingPage/LandingPage';
import { Route, Switch, withRouter, Redirect} from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import NavBar from './components/navbar/navbar';
import { withAlert } from 'react-alert'
import Assignments from './components/assignments/Assignments';
import AssignmentOpened from './components/assignments/assignmentOpened/AssignmentOpened';
function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  if(loggedIn) {
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/homePage">
            <HomePage/>
          </Route>
          <Route exact path="/Assignments">
            <Assignments/>
          </Route>
          <Route exact path="/AssignmentDetails">
            <AssignmentOpened/>
          </Route>
          <Route exact path="*">
            <HomePage/>
          </Route>
        </Switch>
      </div>
    )
  } else {
    return (
      <div>
        <Switch>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <Signup setLoggedIn={setLoggedIn}/>
          </Route>
          <Route exact path="/">
            <LandingPage/>
          </Route>
          <Route exact path="*">
            <LandingPage/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
