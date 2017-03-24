'use strict'

import React          from 'react';
import Button         from '../Button'
import RipplerButton  from '../RipplerButton'

class LevelOne extends React.Component {
  transition;
  solved;
  exitButton;

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.resolve = this.resolve.bind(this);
    this.state = {
      orangeHidden  : true,
      solved        : false
    }
    this.solved = false;
  }
  render() {
    if(this.state.solved){
      this.exitButton = <RipplerButton color="orange" transition="fall" />
      console.log("this.exitButton");
    } else {
      this.exitButton = ""
    }
    return (
      <div>
        {this.exitButton}
        <Button color="blue" delay="0" transition="fall" hidden={false} onClick={this.resolve} />
      </div>
    )
  }

  handleClick () {
    this.setState({
      orangeHidden  : false
    })
  }

  resolve() {
    this.setState({solved : true});
  }
}

export default LevelOne;
