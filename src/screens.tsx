import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import React from "react";
import PostsList from './posts/PostsList'

import store from '../redux/store';

function reduxStoreWrapper (MyComponent:any, store:any) {
  return () => {
      return class StoreWrapper extends React.Component {
          render () {
              return (
                  <Provider store={store}>
                      <MyComponent />
                  </Provider>
              );
          }
      };
  };
}

export function registerScreens( ) {
  console.log(store);
  Navigation.registerComponent("PostsList", reduxStoreWrapper(PostsList, store))
  Navigation.registerComponent('Onboarding', () => require('./components/Onboarding').default);
  Navigation.registerComponent('Home', () => require('./Home').default);
  Navigation.registerComponent('Initializing', () => require('./Initializing').default);
  Navigation.registerComponent('SignIn', () => require('./SignIn').default);
  Navigation.registerComponent('SignUp', () => require('./SignUp').default);
  Navigation.registerComponent('ForgotPassword', () => require('./ForgotPassword').default);
  Navigation.registerComponent('Screen2', () => require('./Screen2').default);
  Navigation.registerComponent('AddPost', () => require('./posts/AddPost').default);
  
}