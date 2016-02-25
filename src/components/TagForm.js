import React from 'react';

class TagForm extends React.Component {
  render() {
    const {tags} = this.props;
    return (
      <form>
        <input className="input"/><input type="submit"/>
      </form>
    );
  }
}

export default TagForm
