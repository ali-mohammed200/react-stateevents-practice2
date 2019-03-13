import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from "./Containers/BeyContainer"
import Favorites from "./Containers/Favorites"

class App extends Component {
  state = {
    beys: []
  };

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
        <BeyContainer beys={this.state.beys}/>
        <Favorites beys={this.state.beys}/>
      </div>
    );
  }
}

export default App;
