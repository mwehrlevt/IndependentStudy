
// JavaScript source code

import React from "react"

function NASAcheckboxes(props) {
    return (

      <ul>
        {props.checkedNASAProps.map(type => (
          <li> {type.title} <input type="checkbox" checked={props.checkedNASAProps.completed} 
          onChange={() => props.handleChangeProps(props.checkedNASAProps.id)}/> 
          </li>
          ))}
      </ul>
    )
}


export default NASAcheckboxes
