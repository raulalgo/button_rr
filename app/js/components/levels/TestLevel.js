'use strict'

import React          from  'react';
import Button         from  '../Button';
import TogglerButton  from  '../TogglerButton';
import LightButton    from  '../LightButton';
import ExitButton     from  '../ExitButton';

class TestLevel extends React.Component {
  constructor(props) {
    super(props)

    this.clicker = this.clicker.bind(this)

    this.state = {
      lights  : true,
      active  : true
    }
  }

  render() {
    return(
      <div className="boardWrapper">
        <ExitButton lights={this.state.lights} />
        <Button color="blue" onClick={this.clicker} />
      </div>
    )
  }

  clicker() {
    this.setState({
      lights    : !(this.state.lights),
      active    : true
    })
  }
}

export default TestLevel;
