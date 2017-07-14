/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './Store'

import HomeNavigation from './Home/HomeNavigation'

export default class ReactNativeLesson extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeNavigation />
      </Provider>
    );
  }
}
