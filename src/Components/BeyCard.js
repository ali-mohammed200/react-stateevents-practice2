import React, { Component } from "react";

class BeyCard extends React.Component {
  state = {
    favorite: this.props.favorite,
    id: this.props.id
  }

  addToFavorite = (e) => {
    this.setState({favorite: !this.state.favorite})
    fetch(`http://localhost:3001/beys/${this.state.id}`, {
      method: 'PATCH',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        favorite: !this.state.favorite
      })
    }).then(resp => resp.json()).then(console.log)
  }

  render() {
    let bey = {
      name: this.props.name,
      img: this.props.img
    }
    return (
      <div>
        <h3>{bey.name}</h3>
        <img id={this.props.id} src={bey.img} onClick={this.addToFavorite}/>
      </div>
    );
  }
}

export default BeyCard;
