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
      };

      handleChangeNASACheckBoxes = (id) => {
        console.log("clicked", id);
        this.setState(prevState => ({
          checkedNASATypes: prevState.checkedNASATypes.map((type) => {
            if (type.id === id) {
              return {
                ...type, completed: !type.completed,
              }
            }
            return type;
          })
        }));
      };

      submitSearch = (latitude, longtitude) => {
        console.log("input one", latitude);
        console.log("input two",longtitude);
      };

  render() {
    return (
      <div> 
        <Header />
      <NASAcheckboxes 
      checkedNASAProps = {this.state.checkedNASATypes} 
      handleChangeProps={this.handleChangeNASACheckBoxes}
      />
      <SearchInput submitSearch = {this.submitSearch}/>
      <MapApp />
      </div>
    )
  }
}
export default ParentComponent
