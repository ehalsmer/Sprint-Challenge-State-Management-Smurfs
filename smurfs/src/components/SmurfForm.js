import React, { useState } from "react";
import { connect, useSelector } from 'react-redux';
import { addSmurf } from '../actions/smurfFormActions';
import { Input, Button } from 'semantic-ui-react';

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
      <h3>Add a New Smurf:</h3>
      <div className="form">
        <Input 
            type="text" 
            name="name" 
            placeholder="name"
            onChange={handleChange}
            size="small"
            />
        <Input
            type="number"
            name="age"
            placeholder="age"
            onChange={handleAge}
            size="small"
            />
        <Input 
            type="text"
            name="height"
            placeholder="height"
            onChange={handleChange}
            size="small"
            />
        <Button basic color="teal" onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);
