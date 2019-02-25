export default function manageCharities(state = { charities: []}, action) {
    switch (action.type) {
        case 'ADD_CHARITY':
            return [...state, action.charity]

        case 'LOADING_CHARITIES':
            return state
        
        case 'FETCH_CHARITIES':
            return state

        default:
            return state
    }
}