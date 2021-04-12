// JavaScript source code

import React from "react"

class Cuisine extends React.Component {
  render() {
    return (
      <ul>
        {this.props.checkedCuisine.map(cuisine => (
          <li>{cuisine.title}</li>
        ))}
      </ul>
    )
  }
}

export default Cuisine