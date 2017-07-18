import { StackNavigator } from 'react-navigation'

//screens
import Home from './containers/Home'
import Result from './containers/Result'

const routeConfiguration = {
  Home: { screen: Home},
  Result: { screen: Result},
}

export const NavigatorHome = StackNavigator(routeConfiguration)

//export reducer for home navigation. returns a new state for every action
export const homeNavReducer = ( state, action ) =>
    {
      //get new state for the navigation actions 
      const newState = NavigatorHome.router.getStateForAction( action, state )
      // return state if newState is null or undefined.
      return newState || state
    }