require('normalize.css');
require('styles/App.css');

import React from 'react';
import { connect } from 'react-redux';
import ImagesList from './ImageList';
import TagList from './TagList';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <header>blablabla <TagList/></header>
        <ImagesList />
      </div>
    );
  }
}

export default connect()(AppComponent)
