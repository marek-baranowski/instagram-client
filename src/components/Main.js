require('normalize.css');
require('styles/App.css');

import React from 'react';
import { connect } from 'react-redux';
import TagList from './TagList';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <header>Instagram client <TagList/></header>
        {this.props.children}
      </div>
    );
  }
}

export default connect()(AppComponent)
