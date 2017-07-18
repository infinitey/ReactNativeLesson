export default function retrieveDataSuccess (state, action) {
    return Object.assign({}, state, {
        isDataPending : false,
        error: action.error,
    })

}