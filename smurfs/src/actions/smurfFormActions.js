import axios from 'axios';

export const addSmurf = (newSmurf) => {
    // console.log('smurf in action', smurf)
    return dispatch => {
        dispatch({type: 'POST_START'});
        axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => console.log('post response', res))
        .catch(err => console.log('error:', err))
    }
}