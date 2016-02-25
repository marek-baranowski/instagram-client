import React from 'react';
import TagListContainer from '../containers/TagListContainer';
import TagFormContainer from '../containers/TagFormContainer';

class HeaderComponent extends React.Component {
  render() {
    return (
      <header className="header clearfix">
        <h1 className="header__logo" onClick={this.props.logoClick}>Instagram client</h1>
        <div className="header__tags">
          <TagFormContainer />
          <div className="header__taglist"><TagListContainer /></div>
        </div>
      </header>
    );
  }
}

export default HeaderComponent
