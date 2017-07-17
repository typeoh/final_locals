import React, {Component} from 'react';
import FavImage from "./FavImage.jsx";

//Contains
class FavCard extends Component {
  
  render() {
    const cardsArray = this.props.cards;
    return (
      <div className="columns is-multiline cards">
        {cardsArray.map((card) => {
        return <div className="column is-1">
          <FavImage image={card.image}/>
        </div>;
          })
        }
      </div>
    );
  }
}
export default FavCard;


