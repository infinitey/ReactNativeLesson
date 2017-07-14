import { StackNavigator } from 'react-navigation'

//screens
import Home from './containers/Home'

const routeConfiguration = {
  Home: { screen: Home},
}

export const NavigatorHome = StackNavigator(routeConfiguration)
