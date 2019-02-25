export default function manageCharities(state = { loading: false, charities: []}, action) {
    switch (action.type) {
        case 'ADD_CHARITY':
            return {...state, charities: action.charity}

        case 'LOADING_CHARITIES':
            return {...state, loading: true}
        
        case 'FETCH_CHARITIES':
            console.log(action, action.payload)
            return {...state, loading: false, charities: action.payload}

        default:
            return state
    }
}