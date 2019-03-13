import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import NavBar from './navbar/navbar';
import Home from 

class App extends Component {
  render() {
    return (
      <>
        <Route component={ NavBar }/>
        <Switch>
          <Route exact path={ '' } component={}
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
