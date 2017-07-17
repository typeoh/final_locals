import React, {Component} from 'react';
import FavCard from "./FavCard.jsx";

//Contains
class FavoriteBar extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="columns">
          <div className="column is-1 card">
            <FavCard />
          </div>
        </div>
      </footer>
    );
  }
}
export default FavoriteBar;