import React, { Component } from "react"

class SearchInput extends Component {
  
  state = {
    longitude: "",
    latitude: "",
    longitudeError: "",
    latitudeError: "",
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let longitudeError = ""
    let latitudeError = ""
    
    if (!this.state.latitude){
      latitudeError = "Inputs cannot be blank";
    }
    else if (this.state.latitude == 0){
      latitudeError = "Input must be greater than one";
    }
    if (latitudeError){
      this.setState({latitudeError});
      return false;
    }
    if (!this.state.longitude){
      longitudeError = "Inputs cannot be blank";
    }
    else if (this.state.longitude == 0){
      longitudeError = "Input must be greater than one";
    }
    if (longitudeError){
      this.setState({longitudeError});
      return false;
    }
    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid){
      this.props.submitSearch(this.state.longitude);
      this.props.submitSearch(this.state.latitude);
      this.setState({
        longitudeError: "",
        latitudeError: "",
      })
    } 
    this.setState({
      longitude: "",
      latitude: "",
    });
  };

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <input 
            type = "number" 
            placeholder = "Longitude value" 
            value = {this.state.longitude}
            name = "longitude" 
            onChange = {this.onChange}
          />
          <div> {this.state.longitudeError} </div>
        </div>
        
        <div>
          <input
            type="number"
            placeholder="Latitude value"
            value={this.state.latitude}
            name = "latitude"
            onChange={this.onChange}
          />
          <div> {this.state.latitudeError} </div>
        </div>
        <button>Submit</button>
      </form>
    )
  }
}
export default SearchInput
