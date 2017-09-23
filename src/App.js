import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
//import AlbumList from './components/AlbumList';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA1uWXwH_XHnfOH5Xzd1UnzdVdJ9I-GidM',
      authDomain: 'manager-e7492.firebaseapp.com',
      databaseURL: 'https://manager-e7492.firebaseio.com',
      projectId: 'manager-e7492',
      storageBucket: 'manager-e7492.appspot.com',
      messagingSenderId: '557303708207'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
//  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
//  const store = createStoreWithMiddleware(reducers);
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
