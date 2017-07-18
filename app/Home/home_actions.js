export const RETRIEVE_DATA_PENDING = 'RETRIEVE_DATA_PENDING'
export const RETRIEVE_DATA_SUCCESS = 'RETRIEVE_DATA_SUCCESS'
export const RETRIEVE_DATA_FAILURE = 'RETRIEVE_DATA_FAILURE'

export const retrieveDataPending = () => {
  return {
    type: RETRIEVE_DATA_PENDING,
    isDataPending: true,
  }
}


export const retrieveDataSuccess = (dataObj) => {
  return {
    type: RETRIEVE_DATA_SUCCESS,
    isDataPending: false,
    dataObj: dataObj
  }
}

export const retrieveDataFailure = (error) => {
  return {
    type: RETRIEVE_DATA_FAILURE,
    isDataPending: false,
    error: error
  }
}