import React from 'react';
import { connect, useSelector } from 'react-redux';

import { getSmurfs } from '../actions/smurfListActions';

const SmurfList = (props) => {
    const state = useSelector (state => state);
    return (           
        <>
            <h1>SmurfList</h1>
            <button onClick={props.getSmurfs}>Get Smurf Data</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {getSmurfs})(SmurfList);