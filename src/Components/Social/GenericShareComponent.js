import React from 'react'
import './GenericShare.css'


const GenericShareComponent = props => {
    return (
        <span className="iconSpace" value={props.type}  onClick={e => props.clicked(e, props.type)}>{props.icon} 
        </span>
    )
}

export default GenericShareComponent