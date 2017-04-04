'use strict'

import React        from  'react';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.height}>
        {this.props.children}
      </div>
    )
  }
}

export default GameBoard;
