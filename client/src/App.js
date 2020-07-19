import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/layout/navbar.component'
import Landing from './components/layout/landing.component'
import Login from './components/auth/login.component'
import Register from './components/auth/register.component'
import Alert from './components/layout/alert.component'
import { loadUser } from './redux/reducers/auth/auth.actions'
import setAuthToken from './utlils/setAuthToken'
import store from './redux/store'
import Dashboard from './components/dashboard/dashboard.component'
import PrivateRoute from './components/routing/private-route'
import Profile from './components/pages/profile/profile.component'

import './App.css';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = () =>{

  useEffect(()=>{
    store.dispatch(loadUser())
  }, [])

  return(
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing}/>
      <section className="container">
        <Alert />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute admin={true} exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </section>
    </Fragment>
  )
}
export default App;
