import React from "react"
import Header from "./Header"
import SearchInput from "./SearchInput"
import NASAcheckboxes from "./NASAcheckboxes"
import MapApp from "./MapApp"

class ParentComponent extends React.Component {
    state = {
          longitude: "",
          latitude: "",
        
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

      submitSearchLongitude = (long) => {
        this.setState({
          longitude: long,
        });
      };

      submitSearchLatitude = (lat) => {
        this.setState({
          latitude: lat,
        });
      };

  render() {
    return (
      <div> 
          <Header />
          <NASAcheckboxes 
            checkedNASAProps = {this.state.checkedNASATypes} 
            handleChangeProps={this.handleChangeNASACheckBoxes}
          />
          <SearchInput 
            submitSearchLongitude={this.submitSearchLongitude} 
            submitSearchLatitude={this.submitSearchLatitude} 
          />
          <MapApp checkedNASAProps = {this.state.checkedNASATypes} longitudeProp = {this.state.longitude} latitudeProp = {this.state.latitude}/>
      </div>
    )
  }
}
export default ParentComponent
