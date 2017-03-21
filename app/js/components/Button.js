'use strict';

import React    from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"button wide horizontal " + this.props.color + " " + this.props.transition} onClick={this.props.onClick} ></div>
    )
  }
}

export default Button;
