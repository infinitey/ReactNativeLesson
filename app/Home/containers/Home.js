/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import HomeView from '../views/HomeView'

export default class Home extends Component {
  onPressMe () {
    console.log('yoyoyoyo')
  }

  render() {
    return (
      <HomeView
        onPress={this.onPressMe.bind(this)}
      />
    );
  }
}
