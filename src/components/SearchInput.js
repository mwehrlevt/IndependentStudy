import React, { Component } from "react"

class SearchInput extends Component {
  
  state = {
    title: ""
  };

      onChange = e => {
        this.setState({
            title: e.target.value
          });
      };

      handleSubmit = e => {
        e.preventDefault();
        this.props.searchResturantProps(this.state.title);
        this.setState({
          title: ""
        });
      };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Search for resturant ..." value={this.state.title} onChange={this.onChange}/>
        <button>Submit</button>
      </form>
    )
  }
}
export default SearchInput
