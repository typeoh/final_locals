import React, {Component} from 'react';
import FavCard from "./FavCard.jsx";

//Contains
class FavBar extends Component {
  
  render() {
    const cardsArray = this.props.cards;
    return (
      <div className="columns is-multiline cards">
        {cardsArray.map((card) => {
        return <div className="column is-2">
          <FavCard />
          </div>;
          })
        } 
      </div>
    );
  }
}
export default FavBar;


