import React, { Component } from "react";
import "./App.css";
import BusinessList from "./components/BusinessList/BusinessList";
import SearchBar from "./components/SearchBar/SearchBar";
import Yelp from "./util/Yelp";

// This is the base state
const baseState = {
  businesses: []
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...baseState }; //this holds a clone(not a reference) to the base state
    this.searchYelp = this.searchYelp.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  async searchYelp(term, location, sortBy) {
    this.resetState(); //reset the state first
    var jObject = await Yelp.search(term, location, sortBy);
    var businessData = []; //this will hold the data

    for (let i = 0; i < 6; i++) {
      businessData.push(jObject[i]);
    }
    console.log(this.state.businesses);
    this.setState({
      businesses: businessData //this will populate the state with the new data
    });
  }

  // This method resets the state
  resetState() {
    this.setState(baseState);
  }

  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
