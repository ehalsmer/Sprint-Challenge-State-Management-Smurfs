import React from 'react';


const Smurf = (props) => {
    return (
        <div className="smurfContainer">
            {/* <Icon onClick={props.deleteSmurf(props.smurf.id)} className="deleteIcon" color="grey" name="delete" /> */}
            <h4>{props.smurf.name}</h4>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    )
}



export default Smurf;