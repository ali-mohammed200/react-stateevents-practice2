import React from "react";
import BeyCard from "../Components/BeyCard"

class BeyContainer extends React.Component {
  render() {
    let beyObj = this.props.beys;
    let arrOfBeys = beyObj.map(bey => {
      return <BeyCard key={bey.id} name={bey.name} img={bey.img} favorite={bey.favorite} id={bey.id}/>
    })

    return (
      <div className="index">
        <h1>Index</h1>
        {arrOfBeys}
      </div>
    );
  }
}

export default BeyContainer;
