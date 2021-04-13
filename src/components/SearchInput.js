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

  render() {
    return (
      <form>
        <input type="text" placeholder="Search for resturant ..." value={this.state.title} onChange={this.onChange}/>
        <button>Submit</button>
      </form>
    )
  }
}
export default SearchInput
