// JavaScript source code

import React from "react"

function Cuisine(props) {
    return (

      <ul>
        {props.checkedCuisineProps.map(cuisine => (
          <li> {cuisine.title} <input type="checkbox" checked={props.checkedCuisineProps.completed} 
          onChange={() => props.handleChangeProps(props.checkedCuisineProps.id)}/> 
          </li>
          ))}
      </ul>
    )
}


export default Cuisine
