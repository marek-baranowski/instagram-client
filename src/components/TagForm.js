import React from 'react';

class TagForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const tag = this.refs.tagInput.value.trim();
    if (/\S/.test(tag))
      this.props.searchTag(tag);
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
