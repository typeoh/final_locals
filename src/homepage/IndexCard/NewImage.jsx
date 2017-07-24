
import React, {Component} from 'react';

class NewImage extends Component {


  renderImage(images) {
    if (images === null) {
      return 'http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg';
    } else {
      // let randomInt = Math.ceil(Math.random() * images.length);
      return this.props.image[0];
    }
  }

  render() {
    return (
      <div className="card-image">
        <figure className="cover">
          <img src={this.renderImage(this.props.image)} alt="Image"></img>
        </figure>
      </div>
    );
  }
}

export default NewImage;