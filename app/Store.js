import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'

import { NavigatorHome } from './Home/HomeNavConfig'
import { dataReducer } from './Home/home_reducers'

//First we need to create a middleware
const middleware = () => {
  return applyMiddleware(createLogger())
}

//Second we need to create a combineReducers
const allReducers = () => {
  return combineReducers({
    //put all your reducers here
    homeNavReducer: ( state, action ) =>
    {
      //get new state for the navigation actions
      const newState = NavigatorHome.router.getStateForAction( action, state )
      // return state if newState is null or undefined.
      return newState || state
    },
    dataReducer,

  })
}

//return an 'store' object to pass as props for Provider
export default createStore(
  allReducers(),
  middleware()
)
