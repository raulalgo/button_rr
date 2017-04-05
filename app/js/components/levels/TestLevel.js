'use strict'

import React          from  'react';
import Button         from  '../Button';
import TogglerButton  from  '../TogglerButton';

class TestLevel extends React.Component {
  constructor(props) {
    super(props)

    this.clicker = this.clicker.bind(this)

    this.state = {
      lights  : false,
      active  : true
    }
  }

  render() {
    return(
      <div className="boardWrapper">
        <TogglerButton color="white" lights={this.state.lights} />
        <Button color="blue" onClick={this.clicker} />
      </div>
    )
  }

  clicker() {
    this.setState({
      lights    : true,
      active    : true
    })
  }
}

export default TestLevel;
