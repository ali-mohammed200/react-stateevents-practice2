import React from "react";
import BeyCard from "../Components/BeyCard"

class Favorites extends React.Component {

  render() {

    let beyObj = this.props.beys;
    let filterBeys = beyObj.filter(bey => bey.favorite)
    let arrOfBeys = filterBeys.map(bey => {
      return <BeyCard key={bey.id} name={bey.name} img={bey.img} favorite={bey.favorite} id={bey.id} faveFunc={this.props.faveFunc}/>
    })

    return (
      <div className="favorites">
        <h1>Index</h1>
        {arrOfBeys}
      </div>
    );
  }
}

export default Favorites;
