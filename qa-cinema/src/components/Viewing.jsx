import React from 'react';
import '../styles/Viewing.css';

function Viewing(props) {
    const v = props.viewing

    console.log(v);
    return (
        <div className="viewing-block">
            {v.timeAndDate}
        </div>
    )
}

export default Viewing;