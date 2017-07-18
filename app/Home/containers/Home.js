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

import { fetchSampleData } from '../home_api'
import { connect } from 'react-redux'

class Home extends Component {
  onPressMe () {
    this.props.fetchSampleData()
  }

  onGoBack () {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <HomeView
        onPress={this.onPressMe.bind(this)}
        onGoBack={this.onGoBack.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  //must return a plain javascript object
  return {
    isDataPending: state.dataReducer.isDataPending,
  }
}

const mapDispatchToProps = (dispatch) => {
  //must return a plain javascript object
  return {
    fetchSampleData : () => dispatch(fetchSampleData()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Home)