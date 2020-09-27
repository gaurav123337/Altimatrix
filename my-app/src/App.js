import React from 'react';
import { Router, Route, Link, Switch, withRouter  } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";


import './App.css';

import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import history from './history';

function App() {
  return (
    <Router history={history} >
    <div className="App">
        <Switch>
          <Route exact path="/register">
            <Signup />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          {/* <Route  path="/register"  component={withRouter(Signup)} />
          <Route  path="/dashboard"   component={withRouter(Dashboard)} />
          <Route exact path="/"  component={withRouter(Login)} /> */}
          {/* <Route  path="/register"  component={withRouter(Signup)} />
          <Route  path="/dashboard"   component={withRouter(Dashboard)} />
          <Route exact path="/"  component={withRouter(Login)} /> */}
        </Switch>
    </div>
    </Router>
  );
}

export default App;
