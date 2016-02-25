import React from 'react';

class TagForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    this.props.searchTag(this.refs.tagInput.value.trim());
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.onSubmit.bind(this)}>
        <input className="input" ref="tagInput" placeholder="Type tag..."/>
        <input className="btn" type="submit" value="Search"/>
      </form>
    );
  }
}

export default TagForm
