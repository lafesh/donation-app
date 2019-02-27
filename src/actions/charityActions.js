export function fetchCharities() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CHARITIES' })
        return fetch('http://localhost:5000/charities')
        .then(response => response.json())
        .then(charities => {dispatch({ type: 'FETCH_CHARITIES', charities})})        
    }
}

export function addCharity(charity) {
    return (dispatch) => {
        fetch('http://localhost:5000/charities', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify( charity) 
    }).then((res) => res.json())
    .then((charity) => dispatch({ type: 'ADD_CHARITY', charity}))
    .catch((err) => console.log(err))
    }
    
}