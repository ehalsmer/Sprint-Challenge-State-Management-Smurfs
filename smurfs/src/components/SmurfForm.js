import React, { useState } from "react";
import { connect, useSelector } from 'react-redux'
import { addSmurf } from '../actions/smurfFormActions'

const SmurfForm = (props) => {
    const state = useSelector (state => state)

    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: 0,
        height: ''
    });

    const handleChange = (e) => {
        e.preventDefault();
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
        console.log('newSmurf', newSmurf)
    }

    const handleAge = (e) => {
        e.preventDefault();
        setNewSmurf({...newSmurf, age: Number(e.target.value)})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addSmurf(newSmurf)
    }

  return (
    <div className="smurfFormContainer">
      <h2>Add a New Smurf:</h2>
      <div className="form">
        <input 
            type="text" 
            name="name" 
            placeholder="name"
            onChange={handleChange}
            />
        <input
            type="number"
            name="age"
            placeholder="age"
            onChange={handleAge}
            />
        <input 
            type="text"
            name="height"
            placeholder="height"
            onChange={handleChange}
            />
        <button onClick={handleSubmit}>Add Smurf</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);
