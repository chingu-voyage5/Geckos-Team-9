import React from 'react'

const GenericShareComponent = props => {
    return (
        <button value={props.type} onClick={e => props.clicked(e, props.type)}>{props.type}</button>
    )
}

export default GenericShareComponent