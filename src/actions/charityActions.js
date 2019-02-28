export function fetchCharities() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CHARITIES' })
        return fetch('http://localhost:5000/charities')
        .then(handleErrors)
        .then(response => response.json())
        .then(charities => {dispatch({ type: 'FETCH_CHARITIES', charities})})    
        .catch(console.log)    
    }
}

export function addCharity(charity) {
    return (dispatch) => {
        fetch('http://localhost:5000/charities', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify( charity) 
    }).then(handleErrors)
    .then(res => res.json())
    .then(charity => dispatch({ type: 'ADD_CHARITY', charity}))
    .catch(console.log)
    } 
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);  
    }
    return response;
}