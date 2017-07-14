import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addNavigationHelpers } from 'react-navigation'
import { NavigatorHome } from './HomeNavConfig'

class HomeNavigation extends Component {

  render() {
    //grabs navigationState (its own state) and dispatch from store
    //addNavigationHelpers creates its own actions and reducers with the state and dispatch
    //doing so, all the components handled by NavigatorHome will have access to navigation
    const { navigationState, dispatch } = this.props

    return (

      <NavigatorHome
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />

    )
  }
}

const mapStateToProps = (state) => {
  return {
    navigationState : state.homeNavReducer
  }
}

export default connect(mapStateToProps) (HomeNavigation)
