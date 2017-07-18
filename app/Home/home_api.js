//import the actionCreators needed
import * as actionCreators from './home_actions'

//import NavigationActions need to redirect user to another page
import { NavigationActions } from 'react-navigation'

//your api functions
export const fetchSampleData = () => {
    //return a function that fetches and dispatches stuff
    return (dispatch) => {
        //to indicate that a process is ongoing
        dispatch(actionCreators.retrieveDataPending())
        //your actual xhr call
        fetch('https://api.ocbc.com:8243/Lifegoals_Retirement/1.0?currentAge=23&retirementAge=45&yearsAfterRetirement=5', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer bcab3f1edd3eb705c5aebf7cdd3f8f52'
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            dispatch(actionCreators.retrieveDataSuccess(responseJson))
            dispatch(NavigationActions.navigate({ routeName: 'Result'}))
        })
        .catch((error) => {
            dispatch(actionCreators.retrieveDataFailure(error))
        });

    }

}