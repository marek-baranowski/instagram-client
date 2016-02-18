import React from 'react';
import TagContainer from '../containers/TagContainer';

class TagList extends React.Component {
  render() {
    const {tags} = this.props;
    return (
      <ul id="tags">
        {tags.data.map(function (tag, i) {
          return <li key={i}><TagContainer tag={tag}/></li>
        })}
      </ul>
    );
  }
}

export default TagList
