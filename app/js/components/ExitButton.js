'use strict';

import React          from 'react';

import RipplerButton  from  './RipplerButton'

class ExitButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RipplerButton color="orange" transition={this.props.transition} onClick={this.props.newLevel} />
    )
  }
}

export default ExitButton;
