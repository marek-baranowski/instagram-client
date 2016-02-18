import React from 'react';

class ImageList extends React.Component {
  render() {
    return (
      <div>
        {this.props.images.map(function (image, i) {
          return <img key={i} onClick={this.props.imageClick.bind(null, image.id)} src={image.images.thumbnail.url}/>
        }.bind(this))}
      </div>
    );
  }
}

export default ImageList
