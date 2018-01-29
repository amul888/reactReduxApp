import React,{ Component} from 'react';
import UserDetail from '../containers/user-detail';

export default class User extends Component{
  render(){
    return(
      <div>home
        <UserDetail/>
      </div>
    )
  }
}
