import React from "react"
import Header from "./Header"
import SearchInput from "./SearchInput"

class ParentComponent extends React.Component {
    state = {
        location: "",
        checkedItems: [
          {
            id: 1,
            title: "Hours",
            completed: true
          },
          {
            id: 2,
            title: "Location",
            completed: false
          },
          {
            id: 3,
            title: "MileRadius",
            completed: false
          },
          {
            id: 4,
            title: "Price",
            completed: false
          },
          {
            id: 5,
            title: "Reviews",
            completed: false
          },
          {
            id: 6,
            title: "TakeOut",
            completed: false
          }
        ]
      }

  render() {
    return (
      <div>
          <Header/>
          <SearchInput location={this.state.location} />
      </div>
    )
  }
}
export default ParentComponent