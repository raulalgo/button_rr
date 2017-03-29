'use strict'

import React          from 'react';
import Button         from '../Button'
import RipplerButton  from '../RipplerButton'

class LevelOne extends React.Component {
  transition;
  solved;
  exitButton;
  extra

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.resolve = this.resolve.bind(this);
    this.nextLevel = this.nextLevel.bind(this);

    this.state = {
      orangeHidden  : true,
      solved        : false,
      extra         : ""
    }
    this.solved = false;
  }
  render() {
    if(this.state.solved){
      this.exitButton = <RipplerButton color="orange" transition="fall" onClick={this.props.newLevel} />
      console.log("this.exitButton");
    } else {
      this.exitButton = ""
    }
    return (
      <div>
        <div className="height_1">
          {this.exitButton}
        </div>
        <Button color="green" delay="0" transition="fall" hidden={false} onClick={this.resolve} extra={this.state.extra} />
      </div>
    )
  }

  handleClick () {
    console.log("click");
    this.setState({
      orangeHidden  : false
    })
  }

  resolve() {
    this.setState({
      solved  : true,
      extra   : "deactivate"
    });
  }

  nextLevel() {
    console.log("say it!");
  }
}

export default LevelOne;

//