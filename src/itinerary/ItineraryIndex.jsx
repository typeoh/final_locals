import React, {Component} from 'react';
import ItineraryTime from "./ItineraryTime.jsx";
import ItineraryCard from "./ItineraryCard.jsx";
import FavoriteBar from "./FavoriteBar.jsx";
import SortableComponent from "../dnd/SortableComponent.jsx";

class ItineraryIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }
componentDidMount() {
    fetch('/index')
      .then((res) => res.json())
      .then((cards) => this.setState({ 
        cards: cards 
      })
    );
  }
  render() {
    return (
      <div className="itinerary">
        <div className="header">
          < FavoriteBar />
        </div>
        <div className="columns">
          <div className="column is-4">
            < ItineraryTime />
          </div>
          <div className="column <is-6></is-6>">
            < SortableComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default ItineraryIndex;