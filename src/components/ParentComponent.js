import React from "react"
import Header from "./Header"
import SearchInput from "./SearchInput"
import Cuisine from "./Cuisine"
import Price from "./Price"
import Reviews from "./Reviews"
import MileRadius from "./MileRadius"
import Hours from "./Hours"

class ParentComponent extends React.Component {
    state = {
        location: "",
        mileRadius: "",
        checkedPrice: [
          {
            id: 1,
            title: "$",
            completed: false
          },
          {
            id: 2,
            title: "$$",
            completed: false
          },
          {
            id: 3,
            title: "$$$",
            completed: false
          }
        ],
        checkedHours: [
          {
            id: 1,
            title: "Breakfast",
            completed: false
          },
          {
            id: 2,
            title: "Lunch",
            completed: false
          },
          {
            id: 3,
            title: "Dinner",
            completed: false
          }
        ],
        
        checkedReviews: [
          {
            id: 1,
            title: "OneStar",
            completed: false
          },
          {
            id: 2,
            title: "TwoStar",
            completed: false
          },
          {
            id: 3,
            title: "ThreeStar",
            completed: false
          },
          {
            id: 4,
            title: "FourStar",
            completed: false
          },
          {
            id: 5,
            title: "FiveStar",
            completed: false
          }

        ],
        checkedCuisine: [
          {
            id: 1,
            title: "Italian",
            completed: false
          },
          {
            id: 2,
            title: "Mexican",
            completed: false
          },
          {
            id: 3,
            title: "American",
            completed: false
          },
          {
            id: 4,
            title: "Asian",
            completed: false
          },
          {
            id: 5,
            title: "Mediterranean",
            completed: false
          }
        ]      
      }

  render() {
    return (
      <div>
          <Header/>
          <SearchInput location={this.state.location.completed} />
          <Cuisine cuisine = {this.state.checkedCuisine.completed} />
          <Price price = {this.state.checkedPrice.completed} />
          <Reviews reviews = {this.state.checkedReviews.completed} />
          <MileRadius radius = {this.state.mileRadius.completed} />
          <Hours hours = {this.state.checkedHours.completed} />
      </div>
    )
  }
}
export default ParentComponent