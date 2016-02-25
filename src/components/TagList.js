import React from 'react';
import TagContainer from '../containers/TagContainer';

class TagList extends React.Component {
  render() {
    const {tags} = this.props;
    return (
      <div>
        {tags.map(function (tag, i) {
          return <TagContainer key={i} tag={tag.name}/>
        })}
      </div>
    );
  }
}

export default TagList
