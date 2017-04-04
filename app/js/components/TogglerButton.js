'use strict';

import React          from  'react';
import Button         from  './Button';
import RipplerButton  from  './RipplerButton';
import ExitButton     from  './ExitButton';

class TogglerButton extends React.Component {
  toggle_flag;
  element;

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.switchOn = this.switchOn.bind(this);

    this.switchOn(this.props.color);
  }

  render() {
    if(this.props.color == "orange" && this.toggle_flag == false) {
      this.element = <ExitButton newLevel={this.props.newLevel} />
    }
    else {
      this.element = <Button color={this.state.color} onClick={this.toggle} transition={this.props.transition} />
    }
    return (
      <div>
        {this.element}
      </div>
    );
  }

  toggle() {
    if(this.toggle_flag) {
      this.switchOff()
      // this.setState({
      //   color : "grey"
      // })
      // this.toggle_flag = false;
    }
    else {
      this.toggle_flag = true;
      this.setState({
        color : this.props.color
      })
    }

    console.log("toggle_flag: " + this.toggle_flag);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.color != this.props.color){
      this.switchOn(nextProps.color)
    }
  }

  switchOn(color){
    if(color == "orange") {
      this.state= {
        color : "white"
      }
    }
    else {
      this.state = {
        color : color
      }
    }

    this.toggle_flag = true;
  }

  switchOff() {
    this.setState({
      color : "grey"
    })
    this.toggle_flag = false;
  }
}

export default TogglerButton
