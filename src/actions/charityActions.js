export function fetchCharities() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CHARITIES' })
        return fetch('http://localhost:3000')
        .then(response => response.json())
        .then(charities => dispatch({ type: 'FETCH_CHARITIES', charities}))
    }
}