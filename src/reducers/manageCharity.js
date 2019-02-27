export default function manageCharities(state = { loading: false, charities: []}, action) {
    switch (action.type) {
        case 'SEND_CHARITY':
            return {...state, charities: action.charity}

        case 'LOADING_CHARITIES':
            return {...state, loading: true}
        
        case 'FETCH_CHARITIES':
            return {...state, loading: false, charities: action.charities}
            
        default:
            return state
    }
}