// JavaScript source code
import React from "react"
import { Icon } from '@iconify/react'
import volcanoIcon from '@iconify/icons-mdi/terrain'
import seaIcon from '@iconify/icons-mdi/waves'
import severeStormsIcon from '@iconify/icons-mdi/weather-lightning-rainy'
import fireIcon from '@iconify/icons-mdi/fire-alert'

function NASAcheckboxes(props) {
    return (

      <ul>
        <p> Welcome to the NASA Events Search! <br></br>Displayed below is a map of various the natural events occuring
          across the planet. <br></br>These include wildfires, severe storms, volcanos, and sea and lake ice. <br></br>
          You can enter in longitiude and latitude values and select a type of natural<br></br> 
          event to search for on the map below. The map will display the four various<br></br> 
          icons to indicate what natural event you have tracked.
        </p>
        <div className="location-marker">
          <Icon icon={fireIcon} className="fire-icon-pic" />
          <Icon icon={severeStormsIcon} className="severe-storms-icon-pic" />
          <Icon icon={volcanoIcon} className="volcano-icon-pic" /> 
          <Icon icon={seaIcon} className="sea-icon-pic" />
        </div>
        
        <p>Please select a checkbox below:</p>
        {props.checkedNASAProps.map(label => (
          <li> {label.title} <input type="checkbox" checked={props.checkedNASAProps.completed} 
          onChange={() => props.handleChangeProps(label.id)} /> 
          </li>
          ))}
      </ul>
    )
}


export default NASAcheckboxes
