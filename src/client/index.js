import React,{ Component } from 'react';
import ReactDom from 'react-dom';
import Routes from '../routes';
import { createStore } from 'redux';
import allReducers from './reducers'
import { Provider } from 'react-redux';

const store = createStore(allReducers);

class App extends Component{
  render(){
    return(
      <div>
        {Routes}
      </div>
    )
  }
}
ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
