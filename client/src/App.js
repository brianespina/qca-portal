import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'

import Landing from './components/layout/landing.component'
import Login from './components/auth/login.component'
import Register from './components/auth/register.component'
import { loadUser } from './redux/reducers/auth/auth.actions'
import setAuthToken from './utlils/setAuthToken'
import store from './redux/store'
import Dashboard from './components/dashboard/dashboard.component'
import PrivateRoute from './components/routing/private-route'
import ProfilePage from './components/pages/profile/profile.component'
import Students from './components/pages/students/students.component'
import ProfileEdit from './components/pages/profile-edit/prodile-edit.component'
import ProfileAdminView from './components/pages/profile-admin-view/profile-admin-view.component'
import Subscriptions from './components/pages/subscriptions/subscriptions.component'
import Users from './components/pages/users/users.component'

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
        <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute admin={true} exact path="/dashboard" component={Dashboard} />
            <PrivateRoute admin={true} exact path="/profile/:id" component={ProfileAdminView} />
            <PrivateRoute admin={true} exact path="/profile/edit/:id" component={ProfileEdit} />
            <PrivateRoute admin={true} exact path="/subscriptions" component={Subscriptions} />
            <PrivateRoute admin={true} exact path="/users" component={Users} />
            <PrivateRoute exact path="/profile" component={ProfilePage} />
            <PrivateRoute admin={true} exact path="/students" component={Students} />
            
        </Switch>
    </Fragment>
  )
}
export default App;
