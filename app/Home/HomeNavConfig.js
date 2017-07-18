import { StackNavigator } from 'react-navigation'

//screens
import Home from './containers/Home'
import Result from './containers/Result'

const routeConfiguration = {
  Home: { screen: Home},
  Result: { screen: Result},
}

export const NavigatorHome = StackNavigator(routeConfiguration)
