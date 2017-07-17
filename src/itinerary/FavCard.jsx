import React, {Component} from 'react';
import FavImage from "./FavImage.jsx";

//TODO: Style Card so that text is overlayed on hover

//Contains
class FavCard extends Component {
  
  render() {
    const cardsArray = this.props.cards;
    return (
      <div className="columns is-multiline cards">
        {cardsArray.map((card) => {
        return <div className="column is-2 has-text-centered">
            <FavImage image={card.image}/>
          <h6 className="title is-6">{card.title}</h6>
          </div>;
          })
        } 
      </div>
    );
  }
}
export default FavCard;


