import React, { Component } from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';

export default class Layout extends Component{
  render(){
    return(
      <div>
        <div>
          UserList:
          <UserList/>
        </div>
        <div>
          User Detail
          <UserDetail/>
        </div>
      </div>
    )
  }
}
