import React from 'react';
import TagListContainer from '../containers/TagListContainer';
import TagFormContainer from '../containers/TagFormContainer';

class HeaderComponent extends React.Component {
  render() {
    return (
      <header className="header clearfix">
        <div className="header__marketing">
          <h1 className="header__logo" onClick={this.props.logoClick}>Instagram tag search</h1>
          <span>Find tag matches and see pictures with selected tag</span>
        </div>
        <div className="header__tags">
          <TagFormContainer />
          <div className="header__taglist"><TagListContainer /></div>
        </div>
      </header>
    );
  }
}

export default HeaderComponent
