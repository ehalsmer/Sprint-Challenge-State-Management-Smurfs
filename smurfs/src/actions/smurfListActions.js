import axios from 'axios';

export const getSmurfs = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_START'});
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data)
            dispatch({ type: 'FETCH_SUCCESS', payload: res.data})
        })
        .catch(err => console.log(err))
    }
}