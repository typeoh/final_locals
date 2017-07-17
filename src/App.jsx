import React, {Component} from 'react';
import IndexCard from "./IndexCard/IndexCard.jsx";
import Navbar from "./landing/Navbar.jsx";
import Search from "./landing/Search.jsx";
import Filter from "./landing/Filter.jsx"
import Itinerary from "./itinerary/Itinerary.jsx"
import FavoriteBar from "./itinerary/FavoriteBar.jsx"

import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './Constants';

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {
      text: props.text
    };
  }
};

@DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class Card {
  static propTypes = {
    text: PropTypes.string.isRequired,

    // Injected by React DnD:
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };


const testCards = [ {
     title: "Food Place",
     image: "http://bulma.io/images/placeholders/480x480.png",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "here",
     type: "food",
     duration: 120,
     start_time: "11:00am"
   }, {
     title: "Hike Time",
     image: "http://bulma.io/images/placeholders/480x480.png",     
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "There",
     type: "outdoors",
     duration: 180,
     start_time: "1:00pm"
   }, {
     title: "Art Place",
     image: "http://bulma.io/images/placeholders/480x480.png",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "Somewhere",
     type:"sight",
     duration: 60,
     start_time: "4:00pm"
   }, {
     title: "Art Place",
     image: "http://bulma.io/images/placeholders/480x480.png",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "Somewhere",
     type:"sight",
     duration: 60,
     start_time: "4:00pm"
   }, {
     title: "Art Place",
     image: "http://bulma.io/images/placeholders/480x480.png",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "Somewhere",
     type:"sight",
     duration: 60,
     start_time: "4:00pm"
   }, {
     title: "Art Place",
     image: "http://bulma.io/images/placeholders/480x480.png",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "Somewhere",
     type:"sight",
     duration: 60,
     start_time: "4:00pm"
   }
];


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: testCards,
      messages: [],
      userCount: []
    }
  }

  render() {
      console.log("Rendering <App />");
    return (
      const { isDragging, connectDragSource, text } = this.props;
      return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1 }}>
        {text}>    
        <Navbar />
        <Search />
        <Filter />
        <IndexCard cards={this.state.cards}/> 
        <Itinerary />
        <FavoriteBar />
      </div>
    );
  }
}

export default App;
