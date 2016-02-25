import React from 'react';
import TagListContainer from '../containers/TagListContainer';

class HeaderComponent extends React.Component {
  render() {
    return (
      /*      <header className="header clearfix">
       <div className="header__logo" onClick={this.props.logoClick}>Instagram client</div>
       </header>*/
      <header className="header clearfix">
        <h1 className="header__logo" onClick={this.props.logoClick}>Instagram client</h1>
        <div className="header__tags">
          <input className="input"/>
          <div className="header__taglist"><TagListContainer /></div>
        </div>
      </header>
    );
  }
}

export default HeaderComponent
