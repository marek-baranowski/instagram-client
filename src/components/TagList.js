import React from 'react';
import TagContainer from '../containers/TagContainer';

class TagList extends React.Component {
  render() {
    const {tags} = this.props;
    return (
      <div className="header__tags">
        {tags.data.map(function (tag, i) {
          return <TagContainer key={i} tag={tag}/>
        })}
      </div>
    );
  }
}

export default TagList
