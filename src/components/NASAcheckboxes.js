// JavaScript source code

import React from "react"

function NASAcheckboxes(props) {
    return (

      <ul>
        <p> Welcome to the NASA Events Search! <br></br>Displayed below is a map of various the natural events occuring
          across the planet. <br></br>These include wildfires, severe storms, volcanos, and sea and lake ice. <br></br>
          You can enter in longitiude and latitude values and select a type of natural<br></br> 
          event to search for on the map below. The map will display the four various<br></br> 
          icons to indicate what natural event you have tracked.
        </p>
        <p>Please select a checkbox below:</p>
        {props.checkedNASAProps.map(label => (
          <li> {label.title} <input type="checkbox" checked={props.checkedNASAProps.completed} 
          onChange={() => props.handleChangeProps(label.id)}/> 
          </li>
          ))}
      </ul>
    )
}


export default NASAcheckboxes
