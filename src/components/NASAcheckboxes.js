// JavaScript source code

import React from "react"

function NASAcheckboxes(props) {
    return (

      <ul>
        {props.checkedNASAProps.map(label => (
          <li> {label.title} <input type="checkbox" checked={props.checkedNASAProps.completed} 
          onChange={() => props.handleChangeProps(label.id)}/> 
          </li>
          ))}
      </ul>
    )
}


export default NASAcheckboxes
