export function fetchCharities() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CHARITIES' })
        return fetch('http://localhost:5000/charities')
        .then(response => response.json())
        .then(charities => dispatch({ type: 'FETCH_CHARITIES', charities}))
    }
}
