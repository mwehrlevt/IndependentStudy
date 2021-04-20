import React from "react"
import Header from "./Header"
import SearchInput from "./SearchInput"
import NASAcheckboxes from "./NASAcheckboxes"
import MileRadius from "./MileRadius"
import Map from "./Map"
import MapApp from "./MapApp"

class ParentComponent extends React.Component {
    state = {
        mileRadius: "",
        search: "",
        checkedNASATypes: [
          {
            id: 1,
            title: "Wildfires",
            completed: false
          },
          {
            id: 2,
            title: "Severe Storms",
            completed: false
          },
          {
            id: 3,
            title: "Volcanos",
            completed: false
          },
          {
            id: 4,
            title: "Sea and Lake Ice",
            completed: false
          }
        ]      
      }

      handleChangeNASACheckBoxes = (id) => {
        this.setState(prevState => ({
          checkedNASATypes: prevState.checkedNASATypes.map(type => {
            if (type.id === id) {
              return {
                ...type,
                completed: !type.completed,
              }
            }
            return type
          }),
        }))
      };

      submitSearch = title => {
        console.log(title);
      };

  render() {
    return (
      <div> 
        <Header />
        <SearchInput searchCoordinatesProps={this.submitSearch}/>
      <NASAcheckboxes 
      checkedNASAProps = {this.state.checkedNASATypes} 
      handleChangeProps={this.handleChangeNASACheckBoxes} />
      <MapApp />
      </div>
    )
  }
}
export default ParentComponent
