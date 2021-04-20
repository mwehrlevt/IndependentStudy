import React, { Component } from "react"

class SearchInput extends Component {
  
  state = {
    longitude: "",
    latitude: ""
  };

      onChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
          });
      };

      handleSubmit = e => {
        e.preventDefault();
        this.props.searchCoordinatesProps(this.state.title);
        this.setState({
          longitude: "",
          latitude: ""
        });
      };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
        placeholder="Longitude value" 
        value={this.state.longitude}
        name = "longitude" 
        onChange={this.onChange}/>

        <input
        type="text"
        placeholder="Latitude value"
        value={this.state.latitude}
        name="latitude"
        onChange={this.onChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
export default SearchInput
