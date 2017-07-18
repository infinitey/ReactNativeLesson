import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import { homeNavReducer } from './Home/HomeNavConfig'
import { dataReducer } from './Home/home_reducers'

//First we need to create a middleware
const middleware = () => {
  return applyMiddleware(createLogger(), thunk)
}

//Second we need to create a combineReducers
const allReducers = () => {
  return combineReducers({
    //put all your reducers here
    homeNavReducer,
    dataReducer,
  })
}

//return an 'store' object to pass as props for Provider
export default createStore(
  allReducers(),
  middleware()
)
