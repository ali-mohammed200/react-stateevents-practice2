import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from "./Containers/BeyContainer"
import Favorites from "./Containers/Favorites"

class App extends Component {
  state = {
    beys: []
  };

  addToFavorite = (id, fav) => {
    let foundBey = this.state.beys.find(bey => bey.id === id);
    foundBey.favorite = !foundBey.favorite;
    console.log(foundBey);


    fetch(`http://localhost:3001/beys/${id}`, {
      method: 'PATCH',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        favorite: !fav
      })
    }).then(resp => resp.json()).then(resp => this.setState({state: this.state.beys}))
  }

  componentDidMount() {
    fetch("http://localhost:3001/beys")
      .then(resp => resp.json())
      .then(beys => {
        this.setState({beys: beys});
      });
  }

  render() {
    return (
      <div className="container">
        <BeyContainer beys={this.state.beys} faveFunc={this.addToFavorite}/>
        <Favorites beys={this.state.beys} faveFunc={this.addToFavorite}/>
      </div>
    );
  }
}

export default App;
