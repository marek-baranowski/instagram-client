import React from 'react';
import TagListContainer from '../containers/TagListContainer';

class HeaderComponent extends React.Component {
  render() {
    return (
      <header className="header clearfix">
        <div className="header__logo">Instagram client</div>
        <TagListContainer/>
      </header>
    );
  }
}

export default HeaderComponent
