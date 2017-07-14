import {
  RETRIEVE_DATA_PENDING,
  RETRIEVE_DATA_SUCCESS,
  RETRIEVE_DATA_FAILURE
} from './home_actions'

import retrieveDataSuccess from './reducers/retrieve_data_success'
import retrieveDataPending from './reducers/retrieve_data_pending'
import retrieveDataFailure from './reducers/retrieve_data_failure'

const initialState = {
  isDataPending: false,
  dataObj: ''
}

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_DATA_PENDING:
      return retrieveDataSuccess( state, action )
    case RETRIEVE_DATA_SUCCESS:
      return retrieveDataSuccess( state, action )
    case RETRIEVE_DATA_FAILURE:
      return retrieveDataFailure( state, action )
    default:
      return state
  }
}
