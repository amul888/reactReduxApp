import React,{ Component } from 'react';
import {  BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import User from './client/components/user';
import Layout from './client/components/layout';

export default(
  <Router>
    <div>
      <Route exact path="/" component={Layout}></Route>
      <Route path="/user" component={User}></Route>
    </div>
  </Router>
);
