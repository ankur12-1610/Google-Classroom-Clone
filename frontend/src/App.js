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
import { myaxios, authorize } from './connections'
import Classroom  from './components/classroom/Classroom.js'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const fetchLogin = async function() {
    if(localStorage.getItem('token')) {
      try {
        authorize(localStorage.getItem('token'), setLoggedIn)
        const res = await myaxios({
          method: "GET",
          url: "/auth/userstatus/"
        })
        console.log(res)
        if(res.status === 200) {
          return setLoggedIn(true)
        }
      } catch(err) {
        console.log(err.response)
        if(err.response.status === 400 || err.response.status === 401) {
          localStorage.removeItem('token')
          delete myaxios.defaults.headers.common['Authorization']
          return setLoggedIn(false)
        }
      }
    } else {
      return setLoggedIn(false)
    }
  }
  
  useEffect(() => {
    fetchLogin()
  },[])



  if(loggedIn) {
    return (
      <div>
        <NavBar setLoggedIn={setLoggedIn}/>
        <Switch>
          <Route exact path="/homePage">
            <HomePage/>
          </Route>
          <Route exact path="/Classroom">
            <Classroom/>
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
            <Login setLoggedIn={setLoggedIn}/>
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
