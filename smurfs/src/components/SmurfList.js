import React from 'react';
import { connect, useSelector } from 'react-redux';
import Smurf from './Smurf';
import { Button } from 'semantic-ui-react';

import { getSmurfs } from '../actions/smurfListActions';
import { deleteSmurf } from '../actions/smurfActions';


const SmurfList = (props) => {
    const state = useSelector (state => state);
    console.log('state', state)
    return (           
        <div className="smurfListContainer">
            <h1>Welcome to Smurf Village</h1>
            <Button basic color="pink" onClick={props.getSmurfs}>Get Smurfs!</Button>
            <div className="smurfsContainer">
            {state.smurfs && state.smurfs.map(smurf => <Smurf smurf={smurf} deleteSmurf={props.deleteSmurf}/>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {getSmurfs, deleteSmurf})(SmurfList);