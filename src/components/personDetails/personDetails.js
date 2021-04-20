import React from 'react'
import './personDetails.css';
function personDetails(props) {
    return (
        <div className="box">
            <div><p>{props.val}</p></div>
            
            {/* <div><p>typing..............</p></div>
            <div><p>typing..............</p></div>
            <div><p>typing..............</p></div>
            <div><p>typing..............</p></div> */}
        </div>
    )
}

export default personDetails;
