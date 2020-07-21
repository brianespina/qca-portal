import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'

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
import MainLayout from './components/layout/main-layout.component'
import Students from './components/pages/students/students.component'

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
      <Route exact path="/" component={Landing}/>
        <Alert />
        <Switch>
            <Route exact path="/register" render={()=>(
                <MainLayout>
                  <Register />
                </MainLayout>
              )
            } />
            <Route exact path="/login" render={()=>(
                <MainLayout>
                  <Login />
                </MainLayout>
              )
            } />
            <PrivateRoute admin={true} exact path="/dashboard" component={Dashboard} />
            <PrivateRoute admin={true} exact path="/profile/:id" component={Profile} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute admin={true} exact path="/students" component={Students} />
            
        </Switch>
    </Fragment>
  )
}
export default App;
