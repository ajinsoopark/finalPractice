import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import NavBar from './navbar/navbar';
import Home from './home/home';
import MoviesContainer from './movies/moviesContainer'

class App extends Component {
  render() {
    return (
      <>
        <Route component={ NavBar }/>
        <Switch>
          <Route exact path={ '/' } component={ Home }/>
          <Route exact path={ '/movies' } component={ MoviesContainer }/>
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
