import axios from 'axios'

export const deleteSmurf = (id) => {
    console.log('id to delete', id)
        return dispatch => {
            axios.post(`http://localhost:3333/smurfs${id}`)
            .then(res => {
                console.log('delete post response', res);
            })
            .catch(err => console.log('delete post error:', err))
}}