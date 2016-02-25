import React from 'react';

class ImageList extends React.Component {
  render() {
    const title = this.props.tag ? '#' + this.props.tag : 'No tag selected, showing popular pictures';
    return (
      <div>
        <h1 className="imagelist__title">{title}</h1>
        {this.props.images.map(function (image, i) {
          return (
            <div key={i} className="imagelist__image">
              <img onClick={this.props.imageClick.bind(null, image.id)}
                   src={image.images.thumbnail.url}/>
            </div>
          )
        }.bind(this))}
      </div>
    );
  }
}

export default ImageList
