import React from 'react';
import { connect, useSelector } from 'react-redux';
import Smurf from './Smurf';

import { getSmurfs } from '../actions/smurfListActions';

const SmurfList = (props) => {
    const state = useSelector (state => state);
    console.log('state', state)
    return (           
        <div className="smurfListContainer">
            <h1>SmurfList</h1>
            <button onClick={props.getSmurfs}>Get Smurf Data</button>
            <div className="smurfsContainer">
            {state.smurfs && state.smurfs.map(smurf => <Smurf smurf={smurf}/>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {getSmurfs})(SmurfList);